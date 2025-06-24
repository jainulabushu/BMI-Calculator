const weightin = document.getElementById("weight");
const heightin = document.getElementById("height");
const bmivalue = document.getElementById("bmiresult");
const bmiStatus = document.getElementById("bmistatus");
const siButton = document.getElementById("siButton");
const usButton = document.getElementById("usButton");
const heightUnit = document.getElementById("heightUnit");
const forUsWeightInput1 = document.getElementById("forUsWeightInput1");
const forUsWeightInput2 = document.getElementById("forUsWeightInput2");

function siFn() {
    siButton.value = 1;
    usButton.value = 0;
    heightUnit.innerHTML = 'cm';
    forUsWeightInput1.style.display = 'block';
    forUsWeightInput2.style.display = 'none';
}

function usFn() {
    siButton.value = 0;
    usButton.value = 1;
    heightUnit.innerHTML = 'ft';
    forUsWeightInput1.style.display = 'none';
    forUsWeightInput2.style.display = 'block';
}



function calculateFn(event) {

    event.preventDefault();

    let bmi = 0;
    if (siButton.value == 1) {
        bmi = weightin.value / ((heightin.value / 100) * (heightin.value / 100));
        
    }
    else{
        bmi = (weightin.value*703)/(heightin.value*heightin.value)
    }

    bmivalue.innerHTML = bmi.toFixed(2);

    if (bmi >= 30) {
        bmiStatus.innerHTML = ' (Obese)';
    }
    else if (bmi >= 25) {
        bmiStatus.innerHTML = ' (Overweight)';
    }
    else if (bmi >= 18.5) {
        bmiStatus.innerHTML = ' (Nomal)';
    }
    else {
        bmiStatus.innerHTML = ' (Underweight)';
    }
}


// Less than 18.5	Underweight
// 18.5 – 24.9	Normal
// 25 – 29.9	Overweight
// 30 or more	Obese
