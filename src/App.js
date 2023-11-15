import React, { useState } from 'react';
import './App.css';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [ageResult, setAgeResult] = useState('0 years, 0 months, 0 days');

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - dobDate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    const age = Math.floor(ageInYears);

    setAgeResult(`${age} years`);
  };

  return (
    <div className="App">
      <div className="center-container">
        <h1>Age Calculator</h1>
        <div className="form">
          <h4>
            <label htmlFor="dob">Enter your date of birth</label>
          </h4>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            style={{ width: "100%" }}
          />
          <button
            className="calculate-button"
            onClick={calculateAge}
          >
            Calculate Age
          </button>
        </div>
        <div className="result">
          <h2>You are {ageResult} old</h2>
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;