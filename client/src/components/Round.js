import React, {useEffect, useState} from "react";
import {ArrowRight} from "react-bootstrap-icons";
import AlbumCover from "./AlbumCover";
function Round(props) {
    const [answeredQuestion, setAnsweredQuestion] = useState(false);

    useEffect(() => {
        setAnsweredQuestion(false);
        }, [props.albumData]
    );

    const albumGuessed = (isCorrectAlbum) => {
        if (!answeredQuestion && isCorrectAlbum) {
            props.updateScore();
        }
        setAnsweredQuestion(true);
    }

    return (
        <div>
            <div>
                <audio src={props.albumData.track.preview_url} controls controlsList="noplaybackrate nodownload" autoPlay={true}/>
                {answeredQuestion ? <ArrowRight className={'nextQuestion'} onClick={props.newRound}>New round</ArrowRight> : <p>&nbsp;</p>}
            </div>
            <div className={'albumCoversBoard'}>
                <AlbumCover id={0} albumData={props.albumData} albumGuessed={albumGuessed}/>
                <AlbumCover id={1} albumData={props.albumData} albumGuessed={albumGuessed}/>
                <AlbumCover id={2} albumData={props.albumData} albumGuessed={albumGuessed}/>
                <AlbumCover id={3} albumData={props.albumData} albumGuessed={albumGuessed}/>
            </div>
        </div>
    )
}
export default Round;