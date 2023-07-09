import React, {useState, useEffect} from 'react';

function AlbumCover({albumData, albumGuessed, id}) {
    const [coverStyle, setCoverStyle] = useState('cover');
    const [albumName, setAlbumName] = useState(' ');

    useEffect(() => {
        setCoverStyle('cover');
        setAlbumName(" ");
    }, [albumData]);

    const isCorrectAlbum = (albumId) => {
        const isCorrect = albumId === albumData.albumNumber;
        albumGuessed(isCorrect);
        updateCoverStyle(isCorrect);
    }

    const updateCoverStyle = (isCorrect) => {
        const { name, artists } = albumData.albums[id];
        setAlbumName(`${name} - ${artists[0].name}`);
        setCoverStyle(isCorrect ? 'cover-green' : 'cover-red');
    }

    return (
        <div className={'albumCovers'}>
            <img onClick={() => isCorrectAlbum(id)}
                 className={coverStyle}
                 src={albumData.albums[id].images[1].url}
                 id={id}
                 alt="An album cover"
            />
            <p>{albumName} &nbsp;</p>
        </div>
    );
}

export default AlbumCover;