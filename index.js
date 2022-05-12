let main_value = 0;

const lengthOperation = document.getElementById("length-operation");
const volumeOperation = document.getElementById("volume-operation");
const massOperation = document.getElementById("mass-operation");
const inputSection = document.getElementById("input-section");


lengthOperation.textContent = `${main_value} meters = ${metersToFeet()} feet | ${main_value} feet = ${feetToMeters()} meters`;
volumeOperation.textContent = `${main_value} liters = ${litersToGallons()} gallons | ${main_value} gallons = ${gallonsToLiters()} liters`;
massOperation.textContent = `${main_value} killos = ${killosToPounds()} pounds | ${main_value} pounds = ${poundsToKillos()} killos`;


function metersToFeet() {
    return (main_value * 3.28084).toFixed(3);
}

function feetToMeters() {
    return (main_value * 0.3048).toFixed(3);
}

function litersToGallons() {
    return (main_value * 0.264172).toFixed(3);
}

function gallonsToLiters() {
    return (main_value * 3.78541).toFixed(3);
}

function killosToPounds() {
    return (main_value * 2.20462).toFixed(3);
}

function poundsToKillos() {
    return (main_value * 0.453592).toFixed(3);
}

inputSection.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        main_value = inputSection.value;
        lengthOperation.textContent = `${main_value} meters = ${metersToFeet()} feet | ${main_value} feet = ${feetToMeters()} meters`;
        volumeOperation.textContent = `${main_value} liters = ${litersToGallons()} gallons | ${main_value} gallons = ${gallonsToLiters()} liters`;
        massOperation.textContent = `${main_value} killos = ${killosToPounds()} pounds | ${main_value} pounds = ${poundsToKillos()} killos`;
    }
});