import React, { useState } from 'react';

const CalorieForm = ({ addCalorie }) => {
  const [calorie, setCalorie] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addCalorie(calorie);
    setCalorie('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={calorie}
        onChange={(event) => setCalorie(event.target.value)}
        placeholder="Enter calorie amount"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CalorieForm;

