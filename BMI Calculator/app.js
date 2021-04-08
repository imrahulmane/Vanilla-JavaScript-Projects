class Calculations {
  static convertPoundToKg(weight) {
    const weightInKg = (weight / 2.2046).toFixed(2);
    return weightInKg;
  }

  static convertFeetToMeters(height) {
    const heightInKg = (height * 0.3048).toFixed(2);
    return heightInKg;
  }

  static calculateBMI(weight, height) {
    const bmi = (weight / (height * 2)).toFixed(2);

    return bmi;
  }

  static getValuesFromDOM() {
    const feet = document.querySelector("#height-in-feet").value;
    const inch = document.querySelector("#height-in-inch").value;
    let weight = document.querySelector("#weight").value;

    if (document.querySelector("#weight-metrics").value == "Pound") {
      weight = Calculations.convertPoundToKg(weight);
    }

    const heightConverteToNumber = Number(feet + "." + inch);
    const heightConvertToMeter = Calculations.convertFeetToMeters(
      heightConverteToNumber
    );

    return [weight, heightConvertToMeter];
  }
}

document
  .querySelector("#calculator-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const [weight, height] = Calculations.getValuesFromDOM();

    const bmi = Calculations.calculateBMI(weight, height);

    document.getElementById("result").innerHTML = `Your BMI Score is ${bmi}`;
  });
