import fs from 'fs'

const availableCastTypes = JSON.parse(fs.readFileSync("./config/castTypes.json"))
let castTypes = []

availableCastTypes.forEach(async castType => {
    try {
        const { default: handler } = await import(castType.handlerFile)
    
        castTypes.push({
            type: castType.type,
            handler: (data) => handler(data)
        })
    } catch(err) {
        console.log(err)
    }
})

export default {
    castTypes: castTypes
}