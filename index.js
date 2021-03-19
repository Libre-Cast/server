import https from 'https'
import express from 'express'
import api from './api/api.js'
import uptime from './lib/uptime.js'
import settings from './lib/settings.js'
import fs from 'fs'

const credentials = {
    key: fs.readFileSync("./config/private.key"),
    cert: fs.readFileSync("./config/certificate.crt")
}

const server = express()
const serverHttps = https.createServer(credentials, server)


server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/', api)

serverHttps.listen(settings.get("port"), () => {
    uptime.setStartTime()

    console.log("Server started!")
})