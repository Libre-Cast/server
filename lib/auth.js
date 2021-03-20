import devices from '../lib/devices.js'

export default {
    checkForLocalhost: (req, res, next) => {
        // Check if the local address matches the remote address.
        if (req.connection.remoteAddress == req.connection.localAddress)
            next()
        else
            res.send("Action not allowed!")
    },
    checkClient: (req, res, next) => {
        if (req.header("deviceKey") == devices.getInfo(req.header("deviceID")).key)
            next()
        else
            res.send("You're device is either not trusted or doesn't exist yet.")
    }
}