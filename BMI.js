var clearButton = document.querySelector("#clear");
var calculateButton = document.querySelector("#calculate");
var age = document.querySelector("#age")
var height = document.querySelector("#height")
var weight = document.querySelector("#weight")
var showResult = document.querySelector("#showResult");
var male = document.querySelector("#male");
var female = document.querySelector("#female");


calculateButton.addEventListener("click", calculate)
clearButton.addEventListener("click", clear)

function calculate(e) {
    e.preventDefault();

    var ageValue = age.value
    var heightValue = height.value
    var weightValue = weight.value
    var maleValue = male.value
    var femaleValue = female.value

    document.createElement("div");


    if (!ageValue || !heightValue || !weightValue || !maleValue || !femaleValue) {
        showResult.innerText = "All fields are mandatory";
    } else if (ageValue <= 2 || ageValue > 120) {
        showResult.innerText = "Please provide an age between 2 and 120"
    } else if (weightValue < 0 || heightValue < 0) {
        showResult.innerText = "Positive numbers only";
    } else {

        var statement = "";
        if (result < 16) {
            statement = "Severe Thinness"
        } else if (result == 16 || result == 17) {
            statement = "Moderate Thinness"
        } else if (result > 17 || result <= 18.5) {
            statement = "Mild Thinness"
        } else if (result > 18.5 || result <= 25) {
            statement = "Normal"
        } else if (result > 25 || result <= 30) {
            statement = "Overweight"
        } else if (result > 30 || result <= 35) {
            statement = "Obese Class 1"
        } else if (result > 35 || result <= 40) {
            statement = "Obese Class 2"
        } else {
            statement = "Obese Class 3"
        }

        var BMI = (weightValue / (heightValue * heightValue)) * 10000;
        var result = BMI.toFixed(1);
        console.log(result);
        showResult.innerText = `Result : ${result} kg/m2 , ${statement}`;
    }
}

function clear(e) {
    e.preventDefault();
    weight.value = "";
    height.value = "";
    age.value = "";
    male.value = "";
    female.value = "";
}