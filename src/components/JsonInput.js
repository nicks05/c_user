import React, { useState } from 'react';
import axios from 'axios';

function JsonInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const jsonData = JSON.parse(inputValue);
      const response = await axios.post('https://vercel.com/nikhar-gangrades-projects/s-repo/CsajPfWXwBpazAAcv4tjs5fr4N3T', jsonData);
      onSubmit(response.data);
      setError(null);
    } catch (e) {
      setError('Invalid JSON or API request failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="5"
        cols="50"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Enter JSON here, e.g., {"data": ["A", "1", "b", "4", "C"]}'
      />
      <br />
      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default JsonInput;
