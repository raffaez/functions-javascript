function bmiCalculator(weight, height){
    const bmi = weight/Math.pow(height,2);
    return bmi;
}

module.exports = bmiCalculator;