import {ArrowRightCircleFill} from 'react-bootstrap-icons';

function Home({ roundsPlayed, score, startGame }) {
    const showStart = roundsPlayed === 0;

    return (
        <div>
            {
                showStart ? (
                    <div>
                        <h2>Welcome to Spotify Album Guesser!</h2>
                        <p>Press play to get started, and match up the album artwork to the track.</p>
                    </div>
                ) : (
                    <div>
                        <h2>Congratulations, you got a score of {score}/5</h2>
                        <p>Play again?</p>
                    </div>
                )
            }
            <ArrowRightCircleFill className={"startButton"} onClick={startGame}></ArrowRightCircleFill>
        </div>
    )
}

export default Home;
