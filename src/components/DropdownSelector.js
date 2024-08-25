import React from 'react';

function DropdownSelector({ onChange }) {
  const handleSelection = (event) => {
    const selected = Array.from(event.target.selectedOptions, option => option.value);
    onChange(selected);
  };

  return (
    <select multiple onChange={handleSelection}>
      <option value="numbers">Numbers</option>
      <option value="alphabets">Alphabets</option>
      <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
    </select>
  );
}

export default DropdownSelector;
