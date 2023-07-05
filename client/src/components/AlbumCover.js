import React, {useState, useEffect} from 'react';

function AlbumCover(props) {
    const [coverStyle, setCoverStyle] = useState('cover');
    const [albumName, setAlbumName] = useState('');

    useEffect(() => {
        setCoverStyle('cover');
        setAlbumName(" ");
    }, [props.albumData]);

    const albumCoverGuessed = (albumId) => {
        const isCorrectAlbum = albumId === props.albumData?.albumNumber;
        props.albumGuessed(isCorrectAlbum);
        updateCoverStyle(isCorrectAlbum);
    }
    const updateCoverStyle = (isCorrectAlbum) => {
        setAlbumName(props.albumData?.albums[props.id].name + " - " + props.albumData?.albums[props.id].artists[0].name);
        if (isCorrectAlbum) {
            setCoverStyle('cover-green')
        } else {
            setCoverStyle('cover-red')
        }
    }

    return (
        <div className={'albumCovers'}>
            <p>{albumName} &nbsp;</p>
            <img onClick={() => albumCoverGuessed(props.id)}
                 className={coverStyle}
                 src={props.albumData?.albums[props.id].images[1].url}
                 id={props.id}
                 alt="An album cover"
            />
        </div>
    );
}

export default AlbumCover;