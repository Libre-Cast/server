export default {
    checkForLocalhost: (req, res, next) => {
        if (req.ip == '127.0.0.1' || req.ip == '::1')
            next()
        else
            res.send("Action not allowed!")
    }
}