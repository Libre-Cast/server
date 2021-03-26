import { Router } from 'express'
import auth from '../lib/auth.js'
import casting from '../lib/casting.js'


const castApi = Router()
const castTypes = casting.castTypes


castApi.post('/:type', auth.checkClient, (req, res) => {
    let sendMessage = "That media type can't be casted to this server."

    castTypes.forEach(castType => {
        if (castType.type == req.params.type) {
            castType.handler(req)
            sendMessage = "Casted!"
        }
    })

    res.send(sendMessage)
})

castApi.get('/types', auth.checkClient, (req, res) => {
    let sendback = []

    castTypes.forEach(castType =>
        sendback.push(castType.type)
    )

    return res.json(sendback)
})

castApi.get('/show', auth.checkForLocalhost, (req, res) => {
    let sendBack = "There's no media on the server!"

    castTypes.forEach(castType => {
        if (castType.type == casting.getMedia().type) {
            sendBack = castType.builder()
        }
    })

    res.send(sendBack)
})

export default castApi