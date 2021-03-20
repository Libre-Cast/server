import noti from 'node-notifier'

export default function(options) {
    noti.notify({
        title: options.title,
        appID: "LibreCast Server GUI",
        message: options.message,
        icon: "./assets/logo.ico"
    })
}