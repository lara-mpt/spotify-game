import React, {useEffect, useState} from "react";
function Round(props) {
    const [answeredQuestion, setAnsweredQuestion] = useState(false);

    useEffect(() => {
        setAnsweredQuestion(false);
        }, [props.albumData]
    );

    return (
        <div>
            <p>Guess which album artwork matches the track!</p>
        </div>
    )
}
export default Round;