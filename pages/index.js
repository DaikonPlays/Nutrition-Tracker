import React from 'react';
import styles from '@/styles/styles.module.css';
import { useState } from 'react';
import box from '@/components/ui/box.module.css';
function Home() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Height:', height);
    console.log('Weight:', weight);
    console.log('Age:', age);
    setHeight('');
    setWeight('');
    setAge('');
  };

  return (
    <div>
      <li className={box.item}>
        <form onSubmit={handleSubmit}>
          <label className={styles.indentedlabel}>
            Enter your height:
            <input type="text" value={height} onChange={handleHeightChange} />
          </label>
          <label className={styles.indentedlabel}>
            Enter your weight:
            <input type="text" value={weight} onChange={handleWeightChange} />
          </label>
          <label className={styles.indentedlabel}>
            Enter your age:
            <input type="text" value={age} onChange={handleAgeChange} />
          </label>
          <button type="submit" className={styles.button}>Save</button>
        </form>
        
      </li>
    </div>
  );
}

export default Home;


