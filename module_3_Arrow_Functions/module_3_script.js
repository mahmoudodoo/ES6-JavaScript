
// Traditional function expression
const square = function(number) {
    return number * number;
};
console.log(square(4)); // 16

// Arrow function with concise body
const squareArrow = number => number * number;
console.log(squareArrow(4)); // 16

// Arrow function with block body
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log(multiply(2, 3)); // 6
