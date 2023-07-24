import React from "react";
import styles from "@/styles/styles.module.css";
import { useState } from "react";
import box from "@/components/ui/box.module.css";
import Link from "next/link";
import { NextUIProvider } from "@nextui-org/react";

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
      <li className={box.left}>
        <form onSubmit={handleSubmit}>
          <label className={styles.indentedlabel}>
            Enter your name:
            <input type="text" value={name} onChange={handleName} />
          </label>
          <label htmlFor="genderSelect">Select Gender:</label>
          <select id="genderSelect" value={gender} onChange={handleGender}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label className={styles.indentedlabel}>
            Enter your height (inches):
            <input type="number" value={height} onChange={handleHeightChange} />
          </label>
          <label className={styles.indentedlabel}>
            Enter your weight (lbs):
            <input type="number" value={weight} onChange={handleWeightChange} />
          </label>
          <label className={styles.indentedlabel}>
            Enter your age:
            <input type="number" value={age} onChange={handleAgeChange} />
          </label>
        </form>
      </li>
      <li className={box.right}>
        <label htmlFor="goalSelect">Select your Goal:</label>
        <select id="goalSelect" value={goal} onChange={handleGoal}>
          <option value="">Select</option>
          <option value="loseFat">Lose Fat</option>
          <option value="gainMuscle">Gain Muscle</option>
          <option value="maintainPhysique">Consistency</option>
        </select>
        <label htmlFor="lifeSelect">How Active are You:</label>
        <select id="lifeSelect" value={life} onChange={handleLife}>
          <option value="">Select</option>
          <option value="sedentary">
            Sedentary (little to no exercise and work a desk job)
          </option>
          <option value="light">
            Lightly active (light exercise 1-3 days per week)
          </option>
          <option value="moderate">
            Moderately active (moderate exercise 3-5 days per week)
          </option>
          <option value="very">
            Very active (heavy exercise 6-7 days per week)
          </option>
          <option value="extremely">
            Extremely active (strenuous training 2 times a day)
          </option>
        </select>
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
