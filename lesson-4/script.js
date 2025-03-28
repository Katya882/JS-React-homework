// 📌 Task Description:
//
//     1.    Ask the user to enter an email using prompt().
// 2.    Validate the email according to the following rules:
//     •    It cannot be empty or null.
//    •    It must contain @.
// •    @ cannot be at the beginning.
//    •    @ cannot be at the end.
//    •    The total length must be greater than 5 characters.
// 3.    If the email does not meet any of these conditions, display the appropriate error message using document.write().
// 4.    Keep asking the user for a valid email until they enter a correct one.

function buttonCheckEmail(){
    let emailCheck;

    do {
        emailCheck = prompt('Enter your email: ');

        if (emailCheck === null) {
            alert('Cancelled by user.');
            return;
        }
        if(!emailCheck || emailCheck.trim() === ''){
            alert('Your email is empty')
        }else if(!emailCheck.includes('@')){
            alert('Your email must contain @')
        }else if(emailCheck.startsWith('@')){
            alert('@ cannot be at the beginning')
        }else if(emailCheck.endsWith('@')){
            alert('@ cannot be at the end')
        }else if(emailCheck.length <= 5){
            alert('Email must be longer than 5 characters.')
        }else{
            break
        }
    }while (true);
}


// 📌 What to do?
//     1️⃣Ask the user to choose an operation (+, -, /, *) using prompt().
//    •    Keep asking until the user enters a valid operation.
// 2️⃣ Ask how many numbers (operands) they want to use.
//    •    It should be a number between 2 and 6.
//    •    Keep asking until the user enters a valid number.
// 3️⃣ Ask for each operand one by one.
//    •    Every operand must be a valid number.
//    •    Keep asking until the user enters a valid number.
// 4️⃣ Calculate and display the result using alert() or console.log().


function buttonCalc() {
    let userCalc;
    do {
        userCalc = prompt('You need to choose an operation (+, -, /, *) ');
    } while (!["+", "-", "*", "/"].includes(userCalc));

    let numCount;
    do {
        numCount = prompt('How many numbers (operands) you want to use? It should be a number between 2 and 6.');
        numCount = Number(numCount);
    } while (isNaN(numCount) || numCount < 2 || numCount > 6);

    let numbers = [];
    for (let i = 0; i < numCount; i++) {
        let num;
        do {
            num = prompt(`Enter number ${i + 1}:`);
            num = Number(num);
        } while (isNaN(num));
        numbers.push(num);
    }

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (userCalc === "+") result += numbers[i];
        if (userCalc === "-") result -= numbers[i];
        if (userCalc === "*") result *= numbers[i];
        if (userCalc === "/") result /= numbers[i];
    }

    alert(`${numbers.join(` ${userCalc} `)} = ${result}`);
}


