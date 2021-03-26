import devices from '../lib/devices.js'

export default {
    checkForLocalhost: (req, res, next) => {
        // Check if the local address matches the remote address.
        if (req.connection.remoteAddress == req.connection.localAddress)
            return next()

        return res.send("Action not allowed!")
    },
    checkClient: (req, res, next) => {
        if (req.connection.remoteAddress == req.connection.localAddress)
            return next()

        if (!req.header("deviceID") || !req.header("deviceKey"))
            return res.send("Please provide credentials!")

        const device = devices.getInfo(req.header("deviceID"))

        if (device.trusted && req.header("deviceKey") == device.key)
            return next()

        return res.send("You're device is either not trusted or doesn't exist yet.")
    }
}