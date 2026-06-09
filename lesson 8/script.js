// Write a function removeElement(array, item) that removes a specific element from an array.
//
// 📌 What to do?
//     1️⃣ Create a function removeElement(array, item) that:
//     •    Takes an array and a specific item as arguments.
//    •    Removes the given item from the array.
//    •    Does not modify the original array structure (no empty spaces).
//
// 2️⃣ The function should work correctly for any array and any item inside it.
//
// 3️⃣ Call the function and log the result using console.log().

const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item){
    const indexSearch = array.indexOf(item);
    if (indexSearch !== -1) {
        array.splice(indexSearch,1)
    }
}
removeElement(array,5);
console.log(array)

// 1️⃣ Create a function sum() that:
//     •    Takes one number as an argument.
//     •    Adds it to the previous sum (starting from 0).
// •    Returns the updated sum.
//
// 2️⃣ The function should store the sum between calls using a closure.

function sum(){
    let total = 0;
    return function (number){
        total = total + number;
        return total;
    };
}

const add = sum();

console.log(add(3));
console.log(add(5));
console.log(add(20));

// Write a function that creates a deep copy of a nested array, ensuring that all levels of the array are copied correctly.
//
// 📌 What to do?
//
//     1️⃣ Create a function deepClone(array) that:
//     •    Takes a nested array as an argument.
//    •    Creates a new array where all elements (including nested arrays) are copied.
//    •    Uses recursion to go through all levels of the array.
//
// 2️⃣ Ensure that the function does not modify the original array.
// 📌 Example Usage:
//
//     const array = [
//         [
//             ['some text', true, [1, 2, 3, 4, [10, 20]]],
//         ],
//         [
//             [1, 2, 3, [100, 200]],
//             ['name', 'age']
//         ],
//     ];
//
// const clonedArray = deepClone(array);
//
// console.log(clonedArray); // Should return a full deep copy of `array`
// console.log(clonedArray === array); // Should be false (ensuring a new copy is created)
// 📌 Requirements:
//
//     ✔️ Use recursion to clone all levels of the array.
// ✔️ Ensure that nested arrays are fully copied, not just referenced.
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

function deepClone(array) {

    const clone = [];

    for (let i = 0; i < array.length; i++) {

        const element = array[i];

        if (Array.isArray(element)) {

            clone.push(
                deepClone(element)
            );

        } else {

            clone.push(element);

        }
    }

    return clone;
}

const array = [
    [
        ['some text', true, [1, 2, 3, 4, [10, 20]]]
    ],
    [
        [1, 2, 3, [100, 200]],
        ['name', 'age']
    ]
];

const clonedArray = deepClone(array);

console.log(clonedArray);
console.log(clonedArray === array);