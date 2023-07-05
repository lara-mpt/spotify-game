import React, {useEffect, useState} from "react";
import {ArrowRight} from "react-bootstrap-icons";
import AlbumCover from "./AlbumCover";
function Round(props) {
    const [answeredQuestion, setAnsweredQuestion] = useState(false);

    useEffect(() => {
        setAnsweredQuestion(false);
        }, [props.albumData]
    );

    return (
        <div>
            {answeredQuestion ? <ArrowRight className={'nextQuestion'} onClick={props.newRound}>New round</ArrowRight> : ""}
            <div className={'albumCoversBoard'}>
                <AlbumCover id={0} albumData={props.albumData} />
                <AlbumCover id={1} albumData={props.albumData} />
                <AlbumCover id={2} albumData={props.albumData} />
                <AlbumCover id={3} albumData={props.albumData} />
            </div>)
        </div>
    )
}
export default Round;