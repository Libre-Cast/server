import noti from 'node-notifier'

export default function(req, res) {
    noti.notify({
        title: req.header("notiTitle") ? req.header("notiTitle") : "LibreCast Server",
        appID: "LibreCast Server GUI",
        port: req.header("notiTitle") ? req.header("notiTitle") : "LibreCast Servers",
        message: req.header("notiMessage") ? req.header("notiMessage") : "Default message...",
        icon: "./assets/logo.png"
    })
    res.end()
}