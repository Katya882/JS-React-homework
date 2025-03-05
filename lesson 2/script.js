// 1️⃣ Concatenation of Strings

question1 = prompt('tell me your name');
question2 = prompt('tell me your friend\'s name');
question3 = prompt('tell me the name you like');

alert(`The names you chose: ${question1} ${question2} ${question3}`);

// 2️⃣ Splitting a Five-Digit Number

function splittingNumber() {
    let userToAsk = prompt('Enter a five-digit number:');

    if (!userToAsk || userToAsk.length !== 5 || isNaN(userToAsk)) {
        alert('Please, enter a valid five-digit number');
        return;
    }
    alert('Thanks!');
    let result = userToAsk.split("").join(" ");
    document.getElementById("output").textContent = "Результат: " + result;
}

splittingNumber();

// 3. Create a script that performs addition, subtraction,
//     multiplication, and division of two numbers entered by the user.

function twoNumbers() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let message = `You entered ${num1} and ${num2}:\n` +
        `${num1} + ${num2} = ${num1 + num2}\n` +
        `${num1} - ${num2} = ${num1 - num2}\n` +
        `${num1} * ${num2} = ${num1 * num2}\n` +
        `${num1} / ${num2} = ${num2 ? (num1 / num2).toFixed(2) : "Cannot divide by zero"}`;

    alert(message);
}
twoNumbers();

//4. Create a script that converts hours into seconds.

function hoursIntoSeconds(){
    let hours = prompt('enter a number of hours:');
    hours = Number(hours);
    if (isNaN(hours) || hours <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    let secondsConverts = hours * 3600;

    alert(`${hours} in seconds: ${secondsConverts}`);
}
hoursIntoSeconds();



