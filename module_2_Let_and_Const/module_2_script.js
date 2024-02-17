
console.log('Exploring let and const');

// Example of let
let score = 10;
console.log('Score with let:', score);

// Example of const
const pi = 3.14;
console.log('Value of pi with const:', pi);

// Trying to reassign a const variable (will throw an error if uncommented)
// pi = 3.14159;

// Block scope with let
if (true) {
    let blockScopedVariable = 'visible';
    console.log(blockScopedVariable); // visible
}
// console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined
