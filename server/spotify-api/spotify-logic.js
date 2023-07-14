const {getRandomOffset, getRandomSearch} = require("../utils/utils");
const {spotifyApi} = require("./api");

const numberOfAlbums = 4;

async function getNextRoundData() {
    const albums = await getAlbums(numberOfAlbums);
    const {track, albumIndex} = await getRandomTrack(albums);

    return {albums, track, albumIndex}
}

const getRandomTrack = (albums) => {
    const albumIndex = getRandomOffset(numberOfAlbums);
    const album = albums[albumIndex];

    return spotifyApi.getAlbumTracks(album.id).then(
        data => {
            const track = data.body.items[getRandomOffset(data.body.items.length)];
            if (track && track.preview_url) {
                return {track, albumIndex};
            }
            return getRandomTrack(albums);
        }
    ).catch(err => {
        console.error(err);
        throw err;
    });
}

async function getAlbums(numberOfAlbums) {
    return Promise.all(Array(numberOfAlbums).fill().map(() => fetchAlbumFromSpotify()));
}

const fetchAlbumFromSpotify = () => {

    return spotifyApi.searchAlbums(getRandomSearch(), {offset: getRandomOffset(200)}).then(
        data => {
            const album = data.body.albums.items[0];
            if (album?.images[1].url) {
                return album;
            }
            return fetchAlbumFromSpotify();
        }
    ).catch(err => {
        console.error(err);
        throw err;
    });
}

module.exports = {
    getNextRoundData: getNextRoundData
};
