import React, {useEffect, useState} from "react";
import {ArrowRight} from "react-bootstrap-icons";
import AlbumCover from "./AlbumCover";
function Round({albumData, updateScore, newRound}) {
    const [answeredQuestion, setAnsweredQuestion] = useState(false);

    useEffect(() => {
        setAnsweredQuestion(false);
        }, [albumData]
    );

    const albumGuessed = (isCorrectAlbum) => {
        if (!answeredQuestion && isCorrectAlbum) {
            updateScore();
        }
        setAnsweredQuestion(true);
    }

    return (
        <div>
            <div>
                <audio src={albumData.track.preview_url} controls controlsList="noplaybackrate nodownload" autoPlay/>
                {answeredQuestion ? <ArrowRight className={'nextQuestion'} onClick={newRound}>New round</ArrowRight> : <p>&nbsp;</p>}
            </div>
            <div className='albumCoversBoard'>
                {[0, 1, 2, 3].map(id => <AlbumCover key={id} id={id} albumData={albumData} albumGuessed={albumGuessed} />)}
            </div>
        </div>
    )
}
export default Round;