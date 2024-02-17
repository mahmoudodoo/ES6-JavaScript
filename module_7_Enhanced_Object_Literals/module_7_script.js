
// Property Value Shorthand
const name = 'John Doe';
const age = 30;
const person = {name, age};
console.log(person);

// Computed Property Names
const propKey = 'status';
const user = {
    ['user_' + propKey]: 'Active'
};
console.log(user);

// Method Definition Shorthand
const obj = {
    greet() {
        console.log('Hello!');
    }
};
obj.greet();
