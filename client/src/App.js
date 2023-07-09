import React, {useState} from "react";
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
        if (roundsPlayed < 5) {
            getAlbumData().then(() => setRoundsPlayed(roundsPlayed + 1));
        } else {
            setRoundsPlayed(6)
        }
    }

    const updateScore = () => {
        setScore(score + 1);
    }

    const getAlbumData = async() => {
        const data = await fetchAlbumData();
        setAlbumData(data);
    }
    const fetchAlbumData = async() => {
        const res = await fetch('http://localhost:4000/newRound');
        return res.json() // combine with the function above.
    }

    const showHome = roundsPlayed === 0 || roundsPlayed > 5;

    return (
      <div className="App">
          {
              showHome ? <Home roundsPlayed={roundsPlayed} score={score} startGame={startGame}/>
                  : (
                      <div>
                          <h2>Match the album cover to the track!</h2>
                          <Round albumData={albumsData} newRound={newRound} updateScore={updateScore}/>
                          <p>Score: {score}/{roundsPlayed}</p>
                      </div>
                  )
          }
      </div>
    );
}

export default App;
