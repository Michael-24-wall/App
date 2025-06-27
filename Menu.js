const prompt = require("prompt-sync")();
const { format } = require("date-fns");

let actionCount = 0;

function mainMenu() {
    console.log("\n=== Main Menu ===");
    console.log("1. Greet Me");
    console.log("2. Tell a Joke");
    console.log("3. Show Current Time");
    console.log("4. Reverse a Word");
    console.log("5. Check if a Number is Even or Odd");
    console.log("6. Calculate the Square of a Number");
    console.log("7. Repeat a Phrase");
    console.log("8. Convert Celsius to Fahrenheit");
    console.log("9. Count Down from a Number");
    console.log("10. Exit");
}

function greetMe() {
    actionCount++;
    console.log("Hello there! You're doing amazing!");
}

function tellJoke() {
    actionCount++;
    console.log(" Why do programmers prefer dark mode? Because light attracts bugs!");
}

function showCurrentTime() {
    actionCount++;
    const now = new Date();
    console.log("Current Time:", format(now, "yyyy-MM-dd HH:mm:ss"));
}

function reverseWord() {
    actionCount++;
    const word = prompt("Enter a word to reverse: ");
    console.log(" Reversed:", word.split("").reverse().join(""));
}

function checkEvenOdd() {
    actionCount++;
    const num = Number(prompt("Enter a number: "));
    if (isNaN(num)) return console.log(" Invalid number.");
    console.log(num % 2 === 0 ? "Even Number" : " Odd Number");
}

function squareNumber() {
    actionCount++;
    const num = Number(prompt("Enter a number: "));
    if (isNaN(num)) return console.log(" Invalid number.");
    console.log(" Square:", num ** 2);
}

function repeatPhrase() {
    actionCount++;
    const phrase = prompt("Enter a phrase: ");
    const times = Number(prompt("How many times to repeat it? "));
    if (isNaN(times) || times < 1) return console.log(" Invalid count.");
    console.log("Result:");
    for (let i = 0; i < times; i++) console.log(`${i + 1}: ${phrase}`);
}

function convertCelsiusToFahrenheit() {
    actionCount++;
    const celsius = Number(prompt("Enter temperature in Celsius: "));
    if (isNaN(celsius)) return console.log("Invalid temperature.");
    const fahrenheit = celsius * 1.8 + 32;
    console.log(` ${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
}

function countDown() {
    actionCount++;
    let num = Number(prompt("Enter a number to count down from: "));
    if (isNaN(num) || num < 0) return console.log("Invalid number.");
    console.log("Countdown:");
    while (num >= 0) { 
        console.log(num);
        num--;
    }
}

function secretFeature() {
    console.log(" You discovered the secret option!");
    console.log(`You’ve completed ${actionCount} actions so far!`);
}

function runApp() {
    while (true) {
        mainMenu();
        const choice = prompt("Choose an option: ");
        console.log(); // line break

        switch (choice) {
            case "1":
                greetMe();
                break;
            case "2":
                tellJoke();
                break;
            case "3":
                showCurrentTime();
                break;
            case "4":
                reverseWord();
                break;
            case "5":
                checkEvenOdd();
                break;
            case "6":
                squareNumber();
                break;
            case "7":
                repeatPhrase();
                break;
            case "8":
                convertCelsiusToFahrenheit();
                break;
            case "9":
                countDown();
                break;
            case "10":
                console.log("Goodbye! Thanks for using the app.");
                console.log(` Total actions completed: ${actionCount}`);
                return;
            case "42":
                secretFeature();
                break;
            default:
                console.log("Invalid input. Please choose a number between 1 and 10.");
        }
    }
}

runApp();
