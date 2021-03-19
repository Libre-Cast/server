import fs from 'fs'

const settingsFile = fs.readFileSync("./config/settings.json")      // This path is relative to the project root.
let settings = JSON.parse(settingsFile)
 
const moduleHandler = {
    save: () => {
        const savedSettings = JSON.stringify(settings, null, 4)
        fs.writeFileSync("./config/settings.json", savedSettings)   // This path is relative to the project root.
    },

    load: () => settings = JSON.parse(settingsFile),

    get: key => settings[key] ? settings[key] : "That setting doesn't exist!",

    getAll: () => settings,

    set: (key, value) => {
        settings[key] = value
        moduleHandler.save()
    },

    setAll: newSettings => {
        settings = newSettings
        moduleHandler.save()
    }
}

export default moduleHandler