import React from "react";
import { useRouter } from "next/router";
import box from "@/components/ui/box.module.css";
import { height, weight, age, name, gender, goal, life } from "@/pages/index";

function UserData() {
  const router = useRouter();
  const { height, weight, age, name, goal, gender, life } = router.query;
  let bmr = 0;
  let tdee = 0;
  let totCal = 0;
  let lowproteinIntake = 0;
  let highproteinIntake = 0;
  let fatIntake = 0;
  if (gender === "male") {
    bmr =
      66.5 + 13.75 * (weight/2.205)  + 5.003 * height * 2.54 - 6.75 * age;
  } else {
    bmr =
      655.1 + 9.563 * weight * 0.45359237 + 1.85 * height * 2.54 - 4.676 * age;
  }
  if (life == "sedentary") {
    tdee = 1.2 * bmr;
  } else if (life == "moderate") {
    tdee = 1.55 * bmr;
  } else if (life == "light") {
    tdee = 1.375 * bmr;
  } else if (life == "very") {
    tdee = 1.725 * bmr;
  } else if (life == "extremely") {
    tdee = 1.9 * bmr;
  }

  if (gender === "male") {
    if (goal == "loseFat") {
      totCal = tdee - 500;
      lowproteinIntake = Math.ceil(0.544 * weight);
      highproteinIntake = Math.ceil(0.726 * weight);
      fatIntake = Math.ceil((totCal * 0.2) / 9);
    }

    if (goal == "gainMuscle") {
      totCal = tdee + 400;
      lowproteinIntake = Math.ceil(0.816 * weight);
      highproteinIntake = Math.ceil(0.99 * weight);
      fatIntake = Math.ceil((totCal * 0.25) / 9);
    }
    if (goal == "maintainPhysique") {
      totCal = tdee;
      lowproteinIntake = Math.ceil(0.544 * weight);
      highproteinIntake = Math.ceil(0.726 * weight);
      fatIntake = Math.ceil((totCal * 0.25) / 9);
    }
  } else {
    if (goal == "loseFat") {
      totCal = tdee - 500;
      lowproteinIntake = Math.ceil(0.544 * weight);
      highproteinIntake = Math.ceil(0.726 * weight);
      fatIntake = Math.ceil((totCal * 0.2) / 9);
    }
    if (goal == "gainMuscle") {
      totCal = tdee + 200;
      lowproteinIntake = Math.ceil(0.816 * weight);
      highproteinIntake = Math.ceil(0.99 * weight);
      fatIntake = Math.ceil((totCal * 0.25) / 9);
    }
    if (goal == "maintainPhysique") {
      totCal = tdee;
      lowproteinIntake = Math.ceil(0.544 * weight);
      highproteinIntake = Math.ceil(0.726 * weight);
      fatIntake = Math.ceil((totCal * 0.25) / 9);
    }
  }

  return (
    <div>
      <li className={box.caloriebox}>
        <h1 className={box.title}>Your Ideal Macros</h1>
        <h3>Your daily calorie intake: {Math.ceil(totCal)}</h3>
        <h3>Your daily low-end protein intake (grams): {lowproteinIntake}</h3>
        <h3>Your daily high-end protein intake (grams): {highproteinIntake}</h3>
        <h3>Your daily fat intake (grams): {fatIntake}</h3>
      </li>
    </div>
  );
}

export default UserData;
