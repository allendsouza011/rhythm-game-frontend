import React, { useEffect } from 'react';
import * as Tone from 'tone';

function Game({ song }) {
  useEffect(() => {
    if (song) {
      const player = new Tone.Player(song.filePath).toDestination();
      player.autostart = true;
    }
  }, [song]);

  return (
    <div>
      <h2>Playing: {song ? song.title : 'No song selected'}</h2>
    </div>
  );
}

export default Game;
