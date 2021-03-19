export default {
    checkForLocalhost: (req, res, next) => {
        // Check if the local address matches the remote address.
        if (req.connection.remoteAddress == req.connection.localAddress)
            next()
        else
            res.send("Action not allowed!")
    }
}