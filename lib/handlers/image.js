import casting from '../casting.js'

export default {
    handler: req => {
        casting.setMedia({
            type: "image",
            dataURL: req.header("imageDataURL")
        })
    },
    builder: () => {
        const data = casting.getMedia()

        return `
            <img src="${data.dataURL}">
        `
    }
}