import { Router } from 'express'
import uptime from '../lib/uptime.js'
import settings from '../lib/settings.js'
import makeQrCode from '../lib/qrcode.js'
import notify from '../lib/notify.js'


const serverApi = Router()

serverApi.get('/status', (_, res) => res.json({
    name: settings.get("name"),
    uptime: uptime.getElapsedTime(),
    allowConnections: settings.get("allowConnections"),
    casting: {
        type: "Image",
        media: {
            name: "Image.jpg"
        }
    }
}))

serverApi.get('/status/allowConnections', (_, res) => res.json(settings.get("allowConnections")))

serverApi.get('/status/casting', (_, res) => res.json({
    type: "Image",
    media: {
        name: "Image.jpg"
    }
}))

serverApi.get('/qrCode/:type', (req, res) => res.send(makeQrCode(req.params.type)))

serverApi.post('/notify', (req, res) => {
    notify({
        title: req.header("notiTitle") ? req.header("notiTitle") : "LibreCast Server",
        message: req.header("notiMessage") ? req.header("notiMessage") : "Default message...",
    })
    res.end()
})


export default serverApi