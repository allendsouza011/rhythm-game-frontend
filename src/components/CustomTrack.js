import React, { useState } from 'react';
import axios from 'axios';

function CustomTrack() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('file', file);

    await axios.post('http://localhost:5000/api/songs', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Reset form
    setTitle('');
    setArtist('');
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artist"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default CustomTrack;
