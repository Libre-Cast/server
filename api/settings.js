import { Router } from 'express'
import settings from '../lib/settings.js'
import auth from '../lib/auth.js'

const settingsApi = Router()

//                     \/ This is a middleware that checks if the request comes from localhost. 
settingsApi.get('/get', auth.checkForLocalhost, (_, res) => res.json(settings.getAll()))
settingsApi.get('/get/:key', auth.checkForLocalhost, (req, res) => res.json(settings.get(req.params.key)))

settingsApi.post('/set', auth.checkForLocalhost, (_, res) => res.json(settings.setAll(/* Feed new settings */)))
settingsApi.post('/set/:key', auth.checkForLocalhost, (req, res) => res.json(settings.set(req.params.key), /* Value */))

export default settingsApi