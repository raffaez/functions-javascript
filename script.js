const prompt = require('prompt-sync')();
const bmiCalculator = require('./modules/bmiCalculator');

console.log('########## BMI CALCULATOR ##########\N');

console.log('How much do you weight? (kg)');
const weightText = prompt('>> ');
const weight = Number(weightText);

console.log('How tall are you? (m)');
const heightText = prompt('>> ');
const height = Number(heightText);

const bmi = bmiCalculator(weight, height);

console.clear();
console.log(`Your BMI is ${bmi.toFixed(1)}.`);

if(bmi<18.5){
    console.log('You are underweight.');
}else if(bmi<24.9){
    console.log('You are on your ideal weight.');
}else if(bmi<29.9){
    console.log('You are overweight.');
}else if(bmi<34.9){
    console.log('You are obese.');
}else{
    console.log('You are extremely overweight.');
}