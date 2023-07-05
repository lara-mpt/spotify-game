import React, {useRef, useState} from "react";
import Home from "./components/Home";
import Round from "./components/Round";

function App() {
    const [roundsPlayed, setRoundsPlayed] = useState(0);
    const [score, setScore] = useState(0);
    const [albumsData, setAlbumData] = useState(null);

    const startGame = async() => {
        setScore(0);
        getAlbumData().then(() => setRoundsPlayed(1));
    }

    const newRound = async() => {
        if (roundsPlayed !== 9) {
            getAlbumData().then(() => setRoundsPlayed(roundsPlayed + 1));
        } else {
            setRoundsPlayed(10)
        }
    }
    const getAlbumData = async() => {
        const data = await fetchAlbumData();
        setAlbumData(data);
    }
    const fetchAlbumData = async() => {
        const res = await fetch('http://localhost:4000/newRound');
        return res.json() // combine with the function above.
    }

    const showHome = roundsPlayed === 0 || roundsPlayed === 10;

    return (
      <div className="App">
        <h1>Spotify Game</h1>
          {
              showHome ? <Home roundsPlayed={roundsPlayed} score={score} startGame={startGame}/>
                  : (
                      <div>
                          <p>Guess which album artwork matches the track!</p>
                          <audio src={albumsData.track.preview_url} controls controlsList="noplaybackrate nodownload" autoPlay={true}/>
                          <Round albumData={albumsData} newRound={newRound} />
                          <p>Score: {score}/{roundsPlayed}</p>
                      </div>
                  )
          }
      </div>
    );
}

export default App;
