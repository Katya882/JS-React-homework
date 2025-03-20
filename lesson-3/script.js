// Create a script that calculates the average of three numbers.
//     Task Description:
//     1.    Ask the user to enter three numbers using prompt().
// 2.    Calculate the average of these three numbers.
// 3.    Show the result using alert().

let number1 = parseFloat(prompt("Вкажіть будь-яке число:"));
let number2 = parseFloat(prompt("Вкажіть будь-яке друге число:"))
let number3 = parseFloat(prompt("Вкажіть будь-яке третє число:"));
console.log(number1, number2, number3);

if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
    alert("Введіть число")
} else{
   let average = (number1 + number2 + number3) / 3;
   alert("Середнє значення всіх чисел: " + average)
}

// Part 1:
// 1.    Ask the user for their year of birth.
// 2.    Ask the user for the city they live in.
// 3.    Ask the user for their favorite sport.
//     After collecting this information, show an alert() with:
//    •    The user’s age (calculated based on the current year).
// •    If the city is Kyiv, Washington, or London, display:
// •    "You live in the capital of [Country]", where [Country] is the country of the entered city.
//    •    If the city is not a capital, display:
// •    "You live in [City]", where [City] is the user’s input.
//
//     Part 2:
// 1.    Predefine three sports and their famous champions.
// 2.    If the user enters one of these sports, display:
// •    "Cool! Do you want to become like [Champion Name]?", where [Champion Name] is a well-

let birth = prompt("Вкажіть ваш рік народження: ");
let city  = prompt("Вкажіть, звідки ви: ");
let  favoriteSport = prompt("Який ваш улюблений спорт?");

birth = parseInt(birth);

if(isNaN(birth) || birth === null){
    alert("Введіть рік")
} else if(city === null){
    alert("Введіть місто")
}else if(favoriteSport === null){
    alert("Оберіть спорт")
}

const currentYear = new Date().getFullYear();
const age = currentYear - birth;

alert(`Your age: ${age}. Your city is ${city}. Your favorite sport is: ${favoriteSport}`)

// Task:
//     Convert the following if...else code into switch...case.

    userInput = prompt("Enter a value:");

    if (userInput === null) {
        console.log("Input was canceled.");
    } else if (userInput.trim() === "") {
        console.log("You entered an empty string.");
    } else if (isNaN(+userInput)) {
        console.log("This is not a number.");
    } else {
        console.log("Valid number entered!");
    }

let userInput = prompt("Enter a value:");

switch (true){
    case userInput === null:
        console.log("Input was canceled.");
        break;
    case userInput.trim() === "":
        console.log("You entered an empty string.");
        break;
    case isNaN(+userInput):
        console.log("This is not a number.")
        break;

    default:
        console.log("Valid number entered!");
}
