import { Router } from 'express'
import crypto from 'crypto'
import devices from '../lib/devices.js'
import auth from '../lib/auth.js'

const deviceApi = Router()

deviceApi.post('/connect', (req, res) => {
    const device = {
        deviceName: req.header('deviceName') ? req.header('deviceName') : "Unnamed Device",
        deviceID: crypto.randomBytes(16).toString('hex'),
        key: crypto.randomBytes(32).toString('base64'),
        trusted: false
    }

    devices.add(device)

    res.json(device)
})

deviceApi.delete('/remove/:deviceID', auth.checkForLocalhost, (req, res) => {
    devices.remove(req.params.deviceID)
    res.end()
})

deviceApi.get('/pendingRequests', auth.checkForLocalhost, (req, res) => {
    res.json(
        devices.getPending()
    )
})

deviceApi.put('/confirmRequest/:deviceID', auth.checkForLocalhost, (req, res) => {
    devices.trust(req.params.deviceID)
    res.end()
})

deviceApi.get('/info/:deviceID', auth.checkForLocalhost, (req, res) => {
    const deviceInfo = devices.getInfo(req.params.deviceID)
    res.json(deviceInfo)
})

deviceApi.get('/test', (req, res) => 
    res.send(req.header("deviceKey") == devices.getInfo(req.header("deviceID")).key && devices.getInfo(req.header("deviceID")).trusted)
)

export default deviceApi