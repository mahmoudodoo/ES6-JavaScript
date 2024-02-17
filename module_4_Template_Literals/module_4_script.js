
// Template literal for embedding expressions
const name = 'World';
console.log(`Hello, ${name}!`);

// Multiline string
console.log(`This is a template literal
spanning multiple lines without needing to use concatenation.`);

// Tagged template literal example (simple implementation)
function tag(strings, value) {
    return strings[0] + value.toUpperCase();
}
console.log(tag`Hello, ${name}!`);
