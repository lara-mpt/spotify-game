import React, {useState, useEffect} from 'react';

function AlbumCover(props) {
    const [coverStyle, setCoverStyle] = useState('cover');
    const [albumName, setAlbumName] = useState('');

    useEffect(() => {
        setCoverStyle('cover');
        setAlbumName(" ");
    }, [props.albumData]);

    const correctAlbumCover = (albumId) => {
        setAlbumName(props.albumData?.albums[props.id].name + " - " + props.albumData?.albums[props.id].artists[0].name);
        if (albumId === props.albumData?.albumNumber) {
            setCoverStyle('cover-green')
        } else {
            setCoverStyle('cover-red')
        }
    }

    return (
        <div className={'albumCovers'}>
            <p>{albumName} &nbsp;</p>
            <img onClick={() => correctAlbumCover(props.id)}
                 className={coverStyle}
                 src={props.albumData?.albums[props.id].images[1].url}
                 id={props.id}
                 alt="An album cover"
            />
        </div>
    );
}

export default AlbumCover;