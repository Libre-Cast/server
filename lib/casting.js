import fs from 'fs'

const availableCastTypes = JSON.parse(fs.readFileSync("./config/castTypes.json"))
let castTypes = []

availableCastTypes.forEach(async castType => {
    try {
        const { default: module } = await import(castType.handlerFile)
    
        castTypes.push({
            type: castType.type,
            handler: req => module.handler(req),
            builder: () => module.builder()
        })
    } catch(err) {
        console.log(err)
    }
})

let castMedia = {}

export default {
    castTypes: castTypes,
    setMedia: newMedia => castMedia = newMedia,
    getMedia: () => castMedia
}