// Print a message to the console
console.log("That's the print.");

// Declare a variable and assign a value to it
let varname;
varname = 'Hello';
console.log(varname);

// Uncomment the alert line if you want to display a browser alert
// alert(varname)

// Declare multiple variables in one statement
let user = "Ali", age = "21", message = "Salam";
console.log(user, age, message);

// Declare a constant variable for my birthday
const myBirthday = "03.10.2002";
console.log(myBirthday);

// Note: Uppercase is generally used for hard-coded constants
const PI = 3.14159; // Example of a constant in uppercase

// Basic arithmetic operations
let a = 50, b = 50;
let x = a + b;
console.log(x); // 100

// Increment and decrement operations
a++;
console.log(a); // 51

x--;
console.log(x); // 99

// Exponentiation and other arithmetic operations
let exp = Math.pow(2, 3); // 2^3 = 8
console.log(exp);

let div = a / b;
console.log(div); // 1

let remainder = a % b;
console.log(remainder); // 1

// Example of a function to demonstrate a basic operation
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet(user)); // Hello, Ali!
