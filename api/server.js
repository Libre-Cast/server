import { Router } from 'express'
import uptime from '../lib/uptime.js'
import settings from '../lib/settings.js'

const serverApi = Router()

serverApi.get('/status', (_, res) => {
    const status = {
        name: settings.get(),
        uptime: uptime.getElapsedTime(),
        allowConnections: true,
        casting: {
            type: "Image",
            media: {
                name: "Image.jpg"
            }
        }
    }

    res.send(JSON.stringify(status))
})

export default serverApi