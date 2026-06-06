// Work with a given array and perform various operations using loops and array methods.
//
// 📌 Given array:
//     numbers = [12, -45, 67, -3, 89, -90, 23, 5, -22, 56, 43, -78, 91, -10, 38, 62, -41, 7, -99, 34, 55, -60, 14, 80];
//
// 📌 What to do?
// 1️⃣ Calculate the total sum and count of all positive numbers in the array.
// 2️⃣ Find the smallest value in the array and determine its index position.
// 3️⃣ Find the largest value in the array and determine its index position.
// 4️⃣ Count how many negative numbers exist in the array.
// 5️⃣ Count the number of odd positive numbers in the array.
// 6️⃣ Count the number of even positive numbers in the array.
// 7️⃣ Find the sum of all even positive numbers.
// 8️⃣ Find the sum of all odd positive numbers.
// 9️⃣ Multiply all positive numbers together and display the result.
// 🔟 Replace all numbers in the array with 0, except for the highest number.
//
// 📌 Requirements:
//     ✔️ Use loops to solve each task.
// ✔️ Ensure the program handles any array of numbers.
// ✔️ Display all results using console.log() or document.write().
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// 1️⃣ Calculate the total sum and count of all positive numbers in the array.

numbers = [12, -45, 67, -3, 89, -90, 23, 5, -22, 56, 43, -78, 91, -10, 38, 62, -41, 7, -99, 34, 55, -60, 14, 80];
totalSum = 0;
positiveNumbers = 0;
for(let i = 0; i < numbers.length; i++){
 totalSum = totalSum + numbers[i];
 if(numbers[i] > 0){
 positiveNumbers++
 }
}

console.log("Сума додатних чисел:", totalSum);
console.log("Кількість додатних чисел:", positiveNumbers);

// 2️⃣ Find the smallest value in the array and determine its index position.

let min = numbers[0];
let minIndex = 0;
for(let i = 1; i < numbers.length; i++){
 if(numbers[i] < min){
  min = numbers[i];
  minIndex = i;
 }
}
console.log("Мінімальне число:", min);
console.log("Його індекс:", minIndex);

// 3️⃣ Find the largest value in the array and determine its index position.

let max = numbers[0];
let maxIndex = 0;
for(let i = 1; i < numbers.length; i++){
 if(numbers[i] > max){
  max = numbers[i];
  maxIndex = i;
 }
}

console.log("Максимальне число:", max);
console.log("Його індекс:", maxIndex);

// 4️⃣ Count how many negative numbers exist in the array.

let negativeNumbers = 0;
for(let i = 0; i < numbers.length; i++){
 if(numbers[i] < 0){
  negativeNumbers++
 }
}
console.log('oll negative numbers: ', negativeNumbers);

// 5️⃣ Count the number of odd positive numbers in the array.
// 8️⃣ Find the sum of all odd positive numbers.

let oddPositiveCount = 0;
let sumOddPositiveNumbers = 0;
for(let i = 0; i < numbers.length; i++){
  if (numbers[i] > 0 && numbers[i] % 2 !== 0){
   sumOddPositiveNumbers = sumOddPositiveNumbers + numbers[i];
   oddPositiveCount++;
  }
}
console.log('Sum of odd positive numbers: ', sumOddPositiveNumbers);
console.log('Count odd positive number: ', oddPositiveCount);

// 6️⃣ Count the number of even positive numbers in the array.
// 7️⃣ Find the sum of all even positive numbers.

let evenPositiveNumbers  = 0;
let totalEvenPositiveNumbers = 0;
for(let i = 0; i < numbers.length; i++){
  if (numbers[i] > 0 && numbers[i] % 2 == 0){
   totalEvenPositiveNumbers= totalEvenPositiveNumbers + numbers[i];
   evenPositiveNumbers ++;
  }
}
console.log('Count even positive number: ', evenPositiveNumbers );
console.log('the sum of all even positive numbers: ', totalEvenPositiveNumbers);


// Work with the given arrays and modify them step by step using loops, conditional statements, and array methods to achieve the final result.
//
// 📌 Given arrays:
// const hero = ['Ivan'];
// const native = ['York', 'Of'];
// const destination = ['Poltava', 'In'];
//
// 📌 What to do?
//     1️⃣ Combine all arrays (destination, native, hero) into one common array named rainbow.
// 2️⃣ Reverse the order of elements in the rainbow array.
// 3️⃣ Modify the rainbow array by adding or replacing elements to match the final structure:
//     ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain']
// 4️⃣ Render the final array in HTML so that each word appears in a separate colored box.
// 5️⃣ Use any font you like (for example, Quicksand as in the reference image).


const hero = ['Ivan'];
const native = ['York', 'Of'];
const destination = ['Poltava', 'In'];

const rainbow = destination.concat(native, hero);
console.log(rainbow);
rainbow.reverse();
console.log(rainbow);

rainbow[0] = 'Richard';
rainbow.splice(3, 0, 'Gave', 'Battle');
rainbow[rainbow.length - 1] = 'Vain';
console.log(rainbow);


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for (let i = 0; i < rainbow.length; i++) {
 const div = document.createElement('div');
 div.className = 'box';
 div.textContent = rainbow[i];
 div.style.backgroundColor = colors[i];
 document.body.appendChild(div);
}

//
// Work with the given sports array and extract specific elements into new arrays using array methods.
//
// 📌 Given array:
//     sports = [
//      ['skier', '⛷'],
//      ['snowboarder', '🏂'],
//      ['apple', '🍎'],
//      ['hockey', '🏒'],
//      ['ice skate', '⛸'],
//      ['swimmer', '🏊'],
//      ['surfer', '🏄‍'],
//      ['watermelon', '🍉'],
//      ['lemon', '🍋'],
//      ['rowboat', '🚣'],
//      ['bicyclist', '🚴‍']
//     ];
//
// 📌 What to do?
//     1️⃣ Extract all winter sports (such as skiing, snowboarding, hockey, and ice skating) into a new array winter_sports using .slice().
// 2️⃣ Extract all summer sports (such as swimming, surfing, rowing, and cycling) into a new array summer_sports using .slice().
// 3️⃣ Extract only the fruits (such as apple, watermelon, and lemon) into a new array fruits from the two extracted arrays (summer_sports and winter_sports).
// 4️⃣ Display all three arrays (winter_sports, summer_sports, fruits) in the console in a structured way, as shown in the reference image console.png.
//
// 📌 Requirements:
//     ✔️ Use the .slice() method to extract specific elements into new arrays.
// ✔️ Ensure that the original sports array remains unchanged.
// ✔️ Use console.log() to display the extracted arrays in a structured format.
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.


sports = [
     ['skier', '⛷'],
     ['snowboarder', '🏂'],
     ['apple', '🍎'],
     ['hockey', '🏒'],
     ['ice skate', '⛸'],
     ['swimmer', '🏊'],
     ['surfer', '🏄‍'],
     ['watermelon', '🍉'],
     ['lemon', '🍋'],
     ['rowboat', '🚣'],
     ['bicyclist', '🚴‍']
];

let winter_sports = sports.slice(0,5);
winter_sports.splice(2, 1);
console.log(winter_sports);

let summer_sports = sports.slice(5);
summer_sports.splice(2, 2);
console.log(summer_sports);

let fruits = [sports[2], sports[7], sports[8]];
console.log('Fruits:', fruits);
