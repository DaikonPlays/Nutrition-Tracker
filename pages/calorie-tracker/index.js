import React, { useState } from 'react';
import CalorieForm from '@/components/calorie/calorieform';
import CalorieList from '@/components/calorie/calorielist';

const Home = () => {
  const [calories, setCalories] = useState([]);

  const addCalorie = (calorie) => {
    setCalories([...calories, calorie]);
  };

  const deleteCalorie = (index) => {
    setCalories(calories.filter((_, i) => i !== index));
  };

  return (
    <div>
      <CalorieForm addCalorie={addCalorie} />
      <CalorieList calories={calories} deleteCalorie={deleteCalorie} />
    </div>
  );
};

export default Home;
