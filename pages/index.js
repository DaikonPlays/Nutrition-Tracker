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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Height: ", height);
    console.log("Weight: ", weight);
    console.log("Age: ", age);
    console.log("Name: ", name);
    console.log("Gender: ", gender);
    setHeight("");
    setWeight("");
    setAge("");
    setName("");
    setGender("");
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
              <input
                type="number"
                value={height}
                onChange={handleHeightChange}
              />
            </label>
            <label className={styles.indentedlabel}>
              Enter your weight (lbs):
              <input
                type="number"
                value={weight}
                onChange={handleWeightChange}
              />
            </label>
            <label className={styles.indentedlabel}>
              Enter your age:
              <input type="number" value={age} onChange={handleAgeChange} />
            </label>
            <Link
              href={{
                pathname: `/${name}_data`,
                query: { height, weight, age, name },
              }}
            >
              <button type="submit" className={styles.button}>
                Save
              </button>
            </Link>
          </form>
        </li>
        <li className={box.right}>
          
        </li>
      </div>
  );
}

export default Home;
