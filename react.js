import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [stats, setStats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/shorten', { originalUrl });
    setShortUrl(response.data.shortUrl);
  };

  const fetchStats = async () => {
    const response = await axios.get(http://localhost:5000/api/stats/${shortUrl.split('/').pop()});
    setStats(response.data);
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={originalUrl} 
          onChange={(e) => setOriginalUrl(e.target.value)} 
          placeholder="Enter URL" 
          required 
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
          <button onClick={fetchStats}>Get Stats</button>
          {stats && <p>Clicks: {stats.clicks}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
