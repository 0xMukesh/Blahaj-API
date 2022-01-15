const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config()

const router = require("./routes/router.js");
const {
    getImages,
    postImages
} = require("./controllers/controllers.js")

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

const port = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send('🦈 BLAHAJ API!')
})

app.post('/post', postImages)
app.get('/get', getImages)

app.listen(port, async () => {
    console.log(`Server is online at ${port} port`);
});