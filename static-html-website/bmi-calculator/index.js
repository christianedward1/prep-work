// index.js
// console.log("What does process.argv contain?", process.argv);

const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
const dailyExercise = (process.argv[5]);
const gender = process.argv[6];

process.argv.length // 7 

if (process.argv.length < 7){
    console.log(`
    You gave ${process.argv.length - 2} arguments(s) to the program

    Please provide 5 arguments for
    
    weight (kg), 
    height (m), 
    age (years), 
    whether you exercise daily (yes or no)
    and your gender (m or f)
    
    Example:

    $ node index.js 82 1.79 32 yes m
  `);

  process.exit();
}

if (isNaN(weightInKg) || isNaN(heightInM) || isNaN(age)) {
    console.log(`
      Please make sure weight, height and age are numbers:
  
      weight (kg) example: 82 | your input: ${process.argv[2]}
      height (m) example 1.79 | your input: ${process.argv[3]}
      age (years) example 32  | your input: ${process.argv[4]} 
  
      $ node index.js 82 1.79 32 yes m
    `);
  
    process.exit();
  }

  if (age < 20) { 
      console.log("Please provide age above 20 years old, this BMI calculator is designed for people over 20."); 
process.exit();    
  }

  if (dailyExercise !== "yes" && dailyExercise !== "no"){
console.log("The value for dailyExercise should either be 'Yes' or 'No' :) Please try again.");
process.exit();
  }

  if (weightInKg < 30 || weightInKg > 300){
      console.log("Please provide a number for weight in kilograms between 30 and 300. For example: 61");
      process.exit();
    }


// The formula for BMI is: weight (kg) / (height (m) x height (m))
const BMI = weightInKg / (heightInM * heightInM);

// Assumption: ideal BMI is 22.5
// The formula for idealWeight is 22.5 x height (m) x height (m)
const idealWeightKg = 22.5 * heightInM * heightInM;

// The formula for Basal Metabolic Rate (BMR) is: 10 x weight (kg) + 6.25 x height (cm) - 5 x age
const heightInCm = heightInM * 100;

let BMR;

if (gender === "f") {
    BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 150;
} else {
    BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 50;
}


let dailyCalories;

if (dailyExercise === "yes") {
    dailyCalories = BMR * 1.6;
} else {
    dailyCalories = BMR * 1.4;
}

//couldnt get following code to work: const genderFemale = gender === "f" ? BMR - 150 : BMR + 50; 

// Assumption: This app is built for people who weigh too much
const weightToLoseKg = weightInKg - idealWeightKg;

// Assumption: we can gain/lose 0.5 kg a week
const dietWeeks = Math.abs(weightToLoseKg / 0.5);

// Assumption: to (either) lose (or gain) 0.5 kg a week we need to cut/gain calorie intake by 500 calories
let dietCalories; 

if (weightToLoseKg > 0) {
    dietCalories = dailyCalories - 500;
} else {
    dietCalories = dailyCalories + 500;
}




console.log(`
**************
BMI CALCULATOR
**************

age: ${age} years
height: ${heightInM} m
weight: ${weightInKg} kg
do you exercise daily? ${dailyExercise}
is your gender male or female (m/f)? ${gender}

****************
FACING THE FACTS
****************

Your BMI is ${Math.round(BMI)}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight

Your ideal weight is ${Math.round(idealWeightKg)} kg
With a normal lifestyle you burn ${Math.round(dailyCalories)} calories a day

**********
DIET PLAN
**********

If you want to reach your ideal weight of ${Math.round(idealWeightKg)} kg:

Eat ${Math.round(dietCalories)} calories a day
For ${Math.round(dietWeeks)} weeks
`);