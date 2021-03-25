import { Router } from 'express'
import auth from '../lib/auth.js'
import casting from '../lib/casting.js'


const castApi = Router()

const castTypes = casting.castTypes


castApi.post('/:type' /*, auth.checkClient*/, (req, res) => {
    let sendMessage = "That media type can't be casted to this server."

    castTypes.forEach(castType => {
        if (castType.type == req.params.type) {
            castType.handler()
            sendMessage = "Casted!"
        }
    })

    res.send(sendMessage)
})

export default castApi