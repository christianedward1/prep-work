console.log("What does process.argv contain?", process.argv);
// index.js
const weightInKg = parseInt (process.argv[2]); // note: i sometimes see var instead of const or let used in demo video, why? 
const heightInM = parseFloat (process.argv[3]);
const ageInYears = parseInt (process.argv[4]); // trying to add age, not sure why i used parseInt and not parseFloat (or something else)

// The formula for BMI is: weight (kg) / (height (m) x height (m))
const BMI = weightInKg / (heightInM * heightInM);

// The formula 2 calculate ur ideal weight is 22.5 x height (m) x height (m)
const idealBMI = 22.5 * (heightInM * heightInM); //should be 72.09225

// The formula 2 calculate BMR
const idealBMR = 10 * weightInKg + 6.25 * heightInM * 100 - 5 * ageInYears;

// forumla 2 calculate weight to lose
const weightToLose = weightInKg - idealBMI; 

console.log(`
**************
BMI CALCULATOR
**************

height: ${heightInM} m
weight: ${weightInKg} kg
age: ${ageInYears} years

****************
FACING THE FACTS
****************

Your BMI is ${Math.round(BMI)}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight

Your ideal weight is ${Math.round(idealBMI)} kg

With a normal lifestyle you burn ${Math.round(idealBMR * 1.4)} per day

****************
DIET PLANNING
****************

The amount of weight to lose is ${Math.round(weightToLose)} kg
The time (weeks) it will take to reach your ideal weight is ${Math.round(weightToLose / 0.5)} weeks
The amount of calories to take each day while dieting is ${Math.round(idealBMR * 1.4 - 500)}
`);
