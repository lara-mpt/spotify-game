const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {getNewRound} = require("./spotify-api/spotify-logic");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express());
app.use(cors());

app.get('/newRound', function(req, res) {
    getNewRound().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => console.log(err))
})

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});