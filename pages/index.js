import React from "react";
import styles from "@/styles/styles.module.css";
import { useState } from "react";
import box from "@/components/ui/box.module.css";
import Link from "next/link";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Image from "next/image";
function Home() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [life, setLife] = useState("");

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleGoal = (event) => {
    setGoal(event.target.value);
  };
  const handleLife = (event) => {
    setLife(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Height: ", height);
    console.log("Weight: ", weight);
    console.log("Age: ", age);
    console.log("Name: ", name);
    console.log("Gender: ", gender);
    console.log("Goal: ", goal);
    console.log("Lifestyle: ", life);

    setHeight("");
    setWeight("");
    setAge("");
    setName("");
    setGender("");
    setGoal("");
    setLife("");
  };

  return (
    <div className={styles.listcontainer}>
      <Image 
      width={320} height={180} 
      src='/weightlift.png'
      alt="Default Image"
      style={{ 
        position: 'absolute', 
        top: '200px', 
        left: '1000px', 
        zIndex: '1' 
      }}
      />
      <li className={box.left}>
        <form onSubmit={handleSubmit}>
          <label className={styles.indentedlabel}>
            Enter your name:
            <TextField id="name" label="Name" value={name} onChange={handleName}/>
          </label>
          <label htmlFor="genderSelect">Select Gender:</label>
          <FormControl fullWidth>
          <InputLabel id="genderSelect" className="rounded-lg" value="">
            Select
          </InputLabel>
          <Select onChange={handleGender} value={gender}>
            <MenuItem value={null}>Select</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
          <label className={styles.indentedlabel}>
            Enter your height (inches):
            <TextField type="number" id="height" label="Height" value={height} onChange={handleHeightChange}/>
          </label>
          <label className={styles.indentedlabel}>
            Enter your weight (lbs):
            <TextField type="number" id="weight" label="Weight" value={weight} onChange={handleWeightChange}/>
          </label>
          <label className={styles.indentedlabel}>
            Enter your age:
            <TextField type="number" id="age" label="Age" value={age} onChange={handleAgeChange}/>
          </label>
        </form>
      </li>
      <li className={box.right}>
        <label htmlFor="goalSelect">Select your Goal:</label>
        <FormControl fullWidth>
          <InputLabel id="goalSelect" className="rounded-lg" value="">
            Select
          </InputLabel>
          <Select onChange={handleGoal} value={goal}>
            <MenuItem value={null}>Select</MenuItem>
            <MenuItem value="loseFat">Lose Fat</MenuItem>
            <MenuItem value="gainMuscle">Gain Muscle</MenuItem>
            <MenuItem value="maintainPhysique">Maintain Physique</MenuItem>
          </Select>
        </FormControl>
        <label htmlFor="lifeSelect">How Active are You:</label>
        <FormControl fullWidth>
          <InputLabel id="lifeSelect" className="rounded-lg">
            Select
          </InputLabel>
          <Select onChange={handleLife} value={life}>
            <MenuItem value={null}>Select</MenuItem>
            <MenuItem value="sedentary">
              Sedentary (little to no exercise and work a desk job)
            </MenuItem>
            <MenuItem value="light">
              Lightly active (light exercise 1-3 days per week)
            </MenuItem>
            <MenuItem value="moderate">
              Moderately active (moderate exercise 3-5 days per week)
            </MenuItem>
            <MenuItem value="very">
              Very active (heavy exercise 6-7 days per week)
            </MenuItem>
            <MenuItem value="extremely">
              Extremely active (strenuous training 2 times a day)
            </MenuItem>
          </Select>
        </FormControl>
        <Link
          href={{
            pathname: `/${name}_data`,
            query: { height, weight, age, name, gender, goal, life },
          }}
        >
          <button
            type="submit"
            className={styles.button}
            disabled={
              !height || !weight || !age || !name || !gender || !goal || !life
            }
          >
            Save
          </button>
        </Link>
      </li>
    </div>
  );
}

export default Home;
