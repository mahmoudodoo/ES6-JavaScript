
// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second,, fourth] = numbers;
console.log(first, second, fourth); // 1 2 4

// Object Destructuring
const person = {
    name: 'John Doe',
    age: 30,
    position: 'Developer'
};
const {name, age} = person;
console.log(name, age); // John Doe 30

// Renaming variables
const {position: job} = person;
console.log(job); // Developer
