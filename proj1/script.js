function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        alert("Wprowadź prawidłową wagę i wzrost!");
        return;
    }

    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    var result = "Twoje BMI wynosi " + bmi + ". ";

    if (bmi < 18.5) {
        result += "Masz niedowagę.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result += "Masz normalną wagę.";
    } else if (bmi >= 25 && bmi < 29.9) {
        result += "Masz nadwagę.";
    } else if (bmi >= 30 && bmi < 34.9){
        result += "Masz otyłość pierwszego stopnia.";
    } else if (bmi >= 35 && bmi < 39.9){
        result += "Masz otyłość drugiego stopnia.";
    } else {
        result += "Masz otyłość trzeciego stopnia."
    }

    document.getElementById("result").innerHTML = result;
}

function calculateBMR() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseFloat(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    
    var bmr;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        alert("Please select a gender.");
        return;
    }

    document.getElementById("result").innerHTML = "Twoje BMR to: " + bmr.toFixed(2) + " kcal/dzień";
}

function calculateWHR() {
    const waist = parseFloat(document.getElementById("waist").value);
    const hip = parseFloat(document.getElementById("hip").value);
    const gender = document.getElementById("gender").value;

    if (isNaN(waist) || isNaN(hip) || waist <= 0 || hip <= 0) {
        document.getElementById('result').textContent = "Proszę wprowadzić prawidłowe wartości.";
        return;
    }

    const whr = waist / hip;
    let resultMessage = `Twoje WHR to: ${whr.toFixed(2)}. `;

    if (gender === "male") {
        if (whr > 1) {
            resultMessage += "Masz budowę ciała typu androidalnego (jabłko).";
        } else if (whr <= 1) {
            resultMessage += "Masz budowę ciała typu gynoidalnego (gruszka).";
        }
    } else if (gender === "female") {
        if (whr > 0.8) {
            resultMessage += "Masz budowę ciała typu androidalnego (jabłko).";
        } else if (whr <= 0.8) {
            resultMessage += "Masz budowę ciała typu gynoidalnego (gruszka).";
        }
    }

    document.getElementById("result").innerHTML = resultMessage;
}

function calculateWTHR() {
    var waist = parseFloat(document.getElementById('waist').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(waist) || isNaN(height)) {
        document.getElementById('result').innerText = "Wprowadź prawidłowe dane.";
        return;
    }

    var whtr = (waist / height) * 100;

    document.getElementById('result').innerText = "WHtR: " + whtr.toFixed(2);
}

function calculateRFM() {
    var gender = document.getElementById("gender").value;
    var height = parseFloat(document.getElementById("height").value);
    var waist = parseFloat(document.getElementById("waist").value);
    var rfm;

    if (gender === "male") {
        rfm = 64 - (20 * height / waist);
    } else if (gender === "female") {
        rfm = 72 - (20 * height / waist);
    }

    document.getElementById("result").innerHTML = "Your RFM is: " + rfm.toFixed(2);
}