const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config()

const model = require("../model/model.js");
const randomObject = require('../utils/randomObject.js')

const app = express();

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.log(err))

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('🦈 BLAHAJ API!')
})

app.post('/post', (req, res) => {
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
})

app.get('/get', (req, res) => {
    model.find((err, images) => {
        if (err) {
            res.send(err)
        }
        else {
            res.json(randomObject(images))
        }
    })
})

const port = process.env.PORT || 3000

app.listen(port, async () => {
    console.log(`Server is online at ${port} port`);
});