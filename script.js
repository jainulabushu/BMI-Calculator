const container = document.getElementById("container");
const weightin = document.getElementById("weight");
const heightin = document.getElementById("height");
const feetIn = document.getElementById("feetIn");
const inchIn = document.getElementById("inchIn");
const bmivalue = document.getElementById("bmiresult");
const bmiStatus = document.getElementById("bmistatus");
const siButton = document.getElementById("siButton");
const usButton = document.getElementById("usButton");
const heightUnit = document.getElementById("heightUnit");
const weightUnit = document.getElementById("weightUnit");
const siInputBox = document.getElementById("siInputBox");
const usInputBox = document.getElementById("usInputBox");


function siFn() {
    siButton.value = 1;
    usButton.value = 0;
    heightUnit.innerHTML = 'cm';
    weightUnit.innerHTML = 'kg';
    siInputBox.style.display = 'flex';
    usInputBox.style.display = 'none';
    container.reset();
}

function usFn() {
    siButton.value = 0;
    usButton.value = 1;
    heightUnit.innerHTML = 'ft';
    weightUnit.innerHTML = 'lb';
    siInputBox.style.display = 'none';
    usInputBox.style.display = 'flex';
    container.reset();
}



function calculateFn(event) {

    event.preventDefault();

    let bmi = 0;
    if (siButton.value == 1) {
        bmi = weightin.value / ((heightin.value / 100) * (heightin.value / 100));

    }
    else {
        let ftToInch = feetIn.value * 12;
        let totalInch = ftToInch + Number(inchIn.value);

        bmi = (weightin.value * 703) / (totalInch * totalInch)

        console.log(bmi)
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
