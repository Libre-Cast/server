import express from 'express'
import api from './api/api.js'
import uptime from './lib/uptime.js'


const server = express()

const port = 18381

server.use('/', api)

server.listen(port, () => {
    uptime.setStartTime()

    console.log("Server started!")
})