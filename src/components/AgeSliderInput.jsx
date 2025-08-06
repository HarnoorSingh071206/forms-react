import React, { useState, useEffect } from 'react';

const AgeSliderInput = ({ initialAge, onAgeChange }) => {
  // State for the slider's current value
  const [ageRange, setAgeRange] = useState(initialAge);
  // State for the input box's value
  const [ageInput, setAgeInput] = useState(initialAge);

  // Notify parent when age changes
useEffect(() => {
  onAgeChange(ageRange);
}, [ageRange, onAgeChange]); 

  // Handle slider changes
  const handleRangeChange = (event) => {
    const newValue = Number(event.target.value);
    setAgeRange(newValue);
    setAgeInput(newValue);
  };

  // Handle input box changes
  const handleInputChange = (event) => {
    setAgeInput(event.target.value);
  };

  // Handle "Done" button click
  const handleDoneClick = () => {
    let valueToSet = Number(ageInput);
    if (isNaN(valueToSet)) valueToSet = 18;
    if (valueToSet < 18) valueToSet = 18;
    if (valueToSet > 100) valueToSet = 100;
    
    setAgeRange(valueToSet);
    setAgeInput(valueToSet);
    onAgeChange(valueToSet);
  };

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto space-x-2 pt-2">
      <label htmlFor="ageRangeSlider" className="text-gray-700 text-lg font-medium mb-4">
        Select Your Age: <span className="text-orange-600">{ageRange}</span>
      </label>

      <input
        type="range"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-6"
        id="ageRangeSlider"
        min="18"
        max="100"
        value={ageRange}
        onChange={handleRangeChange}
      />

      <div className="w-full flex flex-col items-center gap-4">
        <label htmlFor="ageInputBox" className="sr-only">Enter Age</label>
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center text-lg"
          id="ageInputBox"
          min="18"
          max="100"
          value={ageInput}
          onChange={handleInputChange}
          placeholder="Enter Age (18-100)"
        />

        <button
          onClick={handleDoneClick}
          className="bg-gray-500 hover:!bg-orange-500 text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default AgeSliderInput;