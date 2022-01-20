const {
    getImages,
    postImages,
    getRawImages
} = require("../controllers/controllers.js")

const router = require('express').Router()

router.post('/post', postImages)
router.get('/get', getImages)
router.get('/raw', getRawImages)

module.exports = router