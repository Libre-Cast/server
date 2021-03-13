import express from 'express'
import api from './api/api.js'
import uptime from './lib/uptime.js'
import settings from './lib/settings.js'


const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/', api)

server.listen(settings.get("port"), () => {
    uptime.setStartTime()

    console.log("Server started!")
})