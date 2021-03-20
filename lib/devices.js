import fs from 'fs'

let devices = JSON.parse(fs.readFileSync("./config/devices.json")) // Path relative to project root.

function saveDevices() {
    fs.writeFileSync("./config/devices.json", JSON.stringify(devices, null, 4))
}

export default {
    add: device => {
        devices.push(device)
        saveDevices()
    },
    remove: deviceID => {
        for (const device in devices)
            if (devices[device].deviceID == deviceID)
                devices.splice(device)

        saveDevices()
    },
    trust: deviceID => {
        for (const device in devices)
        if (devices[device].deviceID == deviceID)
            devices[device].trusted = true

        saveDevices()
    },
    getPending: () => {
        let pendingDevices = []
        for (const device in devices) 
            if (!devices[device].trusted)
                pendingDevices.push(devices[device])

        return pendingDevices 
    },
    getInfo: deviceID => {
        for (const device in devices) 
            if (devices[device].deviceID == deviceID)
                return devices[device]
    }
}