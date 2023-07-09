let SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI
});

spotifyApi.clientCredentialsGrant().then(
    function(data) {
        console.log(`The access token expires in ${data.body['expires_in']}`);
        console.log(`The access token is ${data.body['access_token']}`);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
        console.log('Something went wrong when retrieving an access token', err);
    }
);

module.exports = {
    spotifyApi
};