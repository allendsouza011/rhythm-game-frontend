import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './components/Game';
import CustomTrack from './components/CustomTrack';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Rhythm Game</h1>
      <ul>
        {songs.map(song => (
          <li key={song._id}>{song.title} by {song.artist}</li>
        ))}
      </ul>
      <Game song={songs[0]} />
      <CustomTrack />
    </div>
  );
}

export default App;
