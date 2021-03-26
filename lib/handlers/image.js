import casting from '../casting.js'
import notify from '../notify.js'


export default {
    handler: req => {
        casting.setMedia({
            type: "image",
            dataURL: req.header("imageDataURL")
        })

        const getImageName = () => {
            const arrayBetweenSlashes = req.header("imageDataURL").split("/")
            const imageName = arrayBetweenSlashes[arrayBetweenSlashes.length - 1]

            return imageName.includes(".") ? imageName : 'unknown image'
        }

        notify({
            title: "Casting Image",
            message: `Casting image '${getImageName()}'.`
        })
    },
    builder: () => {
        const data = casting.getMedia()

        return `
            <img src="${data.dataURL}">
        `
    }
}