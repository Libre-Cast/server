import qrcode from 'qrcode'
import ip from 'ip'
import settings from './settings.js'

export default function(type="svg") {
    let qrCode = ""

    const options = {
        type: type,
        margin: 0,
        color: {
            light: "#00000000",
            dark: "#4F9CEF"
        }
    }

    qrcode.toString(
        `${ip.address()}:${settings.get("port")}`,
        options,
        (_, string) => qrCode = string
    )

    return qrCode
}