const {
    getImages,
    postImages
} = require("../controllers/controllers.js")

const router = require('express').Router()

router.post('/post', postImages)
router.get('/get', getImages)

module.exports = router