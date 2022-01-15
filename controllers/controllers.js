const model = require("../model/model.js");
const randomObject = require('../utils/randomObject.js')

const getImages = (req, res) => {
    model.find((err, images) => {
        if (err) {
            res.send(err)
        }
        else {
            res.json(randomObject(images))
        }
    })
}

const postImages = (req, res) => {
    const image = new model({
        name: req.body.name,
        url: req.body.url
    })

    image.save((err, image) => {
        if (err) {
            res.send(err)
        }
        res.json(image)
    })
}

module.exports = {
    getImages,
    postImages
}