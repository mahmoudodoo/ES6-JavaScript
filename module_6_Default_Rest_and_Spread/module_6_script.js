
// Default Parameters
function greet(message, name = 'World') {
    console.log(message + ', ' + name + '!');
}
greet('Hello'); // Hello, World!

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]
