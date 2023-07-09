const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {getNewRoundData} = require("./spotify-api/spotify-logic");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.get('/newRound', function(req, res) {
    getNewRoundData().then(data => {
        res.send(data);
    }).catch(err => {
        console.log('Error occurred: ', err)
        res.status(500).send({error: 'An error occurred while getting new round'});
    });
});

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});