import {ArrowRightCircleFill} from 'react-bootstrap-icons';

function Home({ roundsPlayed, score, startGame }) {
    const showStart = roundsPlayed === 0;

    const startMessage = (
        <div>
            <h2>Welcome to Spotify Album Guesser!</h2>
            <p>Press play to get started, and match up the album artwork to the track.</p>
        </div>
    );

    const finishMessage = (
        <div>
            <h2>Congratulations, you got a score of {score}/5</h2>
            <p>Play again?</p>
        </div>
    );

    return (
        <div>
            {showStart ? startMessage : finishMessage}
            <ArrowRightCircleFill className={"button startButton"} onClick={startGame} />
        </div>
    )
}

export default Home;
