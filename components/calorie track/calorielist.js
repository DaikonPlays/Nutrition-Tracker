import React from 'react';

const CalorieList = ({ calories, deleteCalorie }) => {
  return (
    <ul>
      {calories.map((calorie, index) => (
        <li key={index}>
          {calorie} calories
          <button onClick={() => deleteCalorie(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CalorieList;
