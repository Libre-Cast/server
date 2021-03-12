import { Router } from 'express'
import uptime from '../lib/uptime.js'
import settings from '../lib/settings.js'

const serverApi = Router()

serverApi.get('/status', (_, res) => {
    res.json({
        name: settings.get("name"),
        uptime: uptime.getElapsedTime(),
        allowConnections: settings.get("allowConnections"),
        casting: {
            type: "Image",
            media: {
                name: "Image.jpg"
            }
        }
    })
})

export default serverApi