import React from 'react';

function ResultDisplay({ data, selectedOptions }) {
  return (
    <div>
      {selectedOptions.includes('numbers') && (
        <div>
          <h3>Numbers:</h3>
          {data.numbers.length > 0 ? (
            data.numbers.map((num, index) => <p key={index}>{num}</p>)
          ) : (
            <p>No numbers found</p>
          )}
        </div>
      )}
      {selectedOptions.includes('alphabets') && (
        <div>
          <h3>Alphabets:</h3>
          {data.alphabets.length > 0 ? (
            data.alphabets.map((alpha, index) => <p key={index}>{alpha}</p>)
          ) : (
            <p>No alphabets found</p>
          )}
        </div>
      )}
      {selectedOptions.includes('highest_lowercase_alphabet') && (
        <div>
          <h3>Highest Lowercase Alphabet:</h3>
          {data.highest_lowercase_alphabet.length > 0 ? (
            data.highest_lowercase_alphabet.map((highest, index) => <p key={index}>{highest}</p>)
          ) : (
            <p>No lowercase alphabets found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ResultDisplay;
