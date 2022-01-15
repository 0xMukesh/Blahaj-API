const {
    getImages,
    postImages
} = require("../controllers/controllers.js")

const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("🦈 BLAHAJ API!")
})

router.post('/post', postImages)
router.get('/get', getImages)

module.exports = router