import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import ResultDisplay from './components/ResultDisplay';
import DropdownSelector from './components/DropdownSelector';
import './App.css';

function App() {
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleJsonSubmit = (data) => {
    setResponseData(data);
  };

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="App">
      <h1>ABCD123</h1> {/* Replace with actual roll number */}
      <JsonInput onSubmit={handleJsonSubmit} />
      {responseData && (
        <>
          <DropdownSelector onChange={handleSelectChange} />
          <ResultDisplay data={responseData} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
}

export default App;
