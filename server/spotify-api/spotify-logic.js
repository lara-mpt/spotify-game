const {getRandomOffset, getRandomSearch} = require("../utils/utils");
const {spotifyApi} = require("./api");

async function getNewRound() {
    const numberOfAlbums = 4;
    const albums = await getAlbums(numberOfAlbums);
    const {track, albumNumber} = await getTrack(albums);

    return {albums, track, albumNumber}
}


const getTrack = (albums) => {
    const albumNumber = getRandomOffset(4);
    const album = albums[albumNumber];

    return new Promise((resolve, reject) => {
        spotifyApi.getAlbumTracks(album.id).then(
            function(data) {
                const track = data.body.items[getRandomOffset(data.body.items.length)]
                if (!track || !track.preview_url) {
                    return getTrack(albums);
                }
                resolve({track, albumNumber});
            },
            function(err) {
                reject(console.error(err));
            }
        );
    })
}

async function getAlbums(numberOfAlbums) {
    let promises = [];
    for (let i = 0; i < numberOfAlbums; i++) {
        promises.push(getAlbum())
    }
    return await Promise.all(promises);
}

const getAlbum = () => {

    return new Promise((resolve, reject) => {
        spotifyApi.searchAlbums(getRandomSearch(), {offset: getRandomOffset(200)}).then(
            function(data) {
                if (!data.body.albums.items[0]?.images[1].url) {
                    return getAlbum();
                }
                resolve(data.body.albums.items[0]);
            },
            function(err) {
                reject(console.error(err));
            }
        );
    })
}

module.exports = {
    getNewRound
};
