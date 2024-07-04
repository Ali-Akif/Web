// JS BIBLE 

// #region Problem Solving and Planning
// CHAPTER 0: Problem Solving and Planning

/*
1. Understand
   - If you can’t explain something in simple terms, you don’t understand it.

2. Plan
   - Given input X, what are the steps necessary to return output Y?

3. Divide
   - Reduce the problem to the point where you know how to solve it and write the solution.
   - Then expand the problem slightly and rewrite the solution to match.
   - Keep going until you are back where you started.

4. Stuck?
   - Debug: Go step by step through your solution trying to find where you went wrong. 
     - The art of debugging is figuring out what you really told your program to do rather than what you thought you told it to do.
   - Reassess: Take a step back. Look at the problem from another perspective. 
     - Is there anything that can be abstracted to a more general approach? 
     - Sometimes we get so lost in the details of a problem that we overlook general principles that would solve the problem at a more general level.
     - Another way of reassessing is starting anew. Delete everything and begin again with fresh eyes. You’ll be dumbfounded at how effective this is.
   - Research: Good ol’ Google. Don’t look for a solution to the big problem. Only look for solutions to sub-problems.
     - Unless you struggle (even a little bit), you won’t learn anything. If you don’t learn anything, you wasted your time.

5. Practice
   - Practice. Practice. Practice.
   - It’ll only be a matter of time before you recognize that “this problem could easily be solved with <insert concept here>.”
   - How to practice? There are options out the wazoo! Chess puzzles, math problems, Sudoku, Go, Monopoly, video-games, cryptokitties, etc.
   - A common pattern amongst successful people is their habit of practicing “micro problem-solving.”
*/

// #endregion

// #region PseudoCode

// refer to https://builtin.com/data-science/pseudocode

// #endregion

// #region Error Handling and Understanding JavaScript Errors
// CHAPTER 0.2: Error Handling and Understanding JavaScript Errors

/*
1. Try Block Execution
   - The code inside the try block is executed.

2. Error Occurrence
   - If an error occurs, execution stops, and the error is passed to the catch block.

3. Catch Block Execution
   - The catch block handles the error using the error object.

4. Continuation
   - After handling the error, the program continues with the next statement after the try...catch block.

The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

The SyntaxError object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.

A TypeError may be thrown when:
- an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
- when attempting to modify a value that cannot be changed; or
- when attempting to use a value in an inappropriate way.
*/

// #endregion
// #region Data Types in JavaScript
// CHAPTER 1: Data Types in JavaScript
// JavaScript supports different types of data including numbers, strings, booleans, objects, etc.
const numberType = 42; // Number
const stringType = "Hello"; // String
const booleanType = true; // Boolean
const objectType = { name: "John" }; // Object
const undefinedType = undefined; // Undefined
const nullType = null; // Null
const symbolType = Symbol("id"); // Symbol
const bigIntType = 1234567890123456789012345678901234567890n; // BigInt
const nonPrimitiveType = { key: "value" }; // Object is non-primitive
// #endregion

// #region Variables and Quotes
// CHAPTER 2: Variables and Quotes
// Variables can be defined using var, let, and const. Strings can be defined using single, double, or backtick quotes.
let undefinedVariable;
let nullVariable = null;
console.log(undefinedVariable); // undefined
console.log(nullVariable); // null

const singleQuoteString = 'Hello';
const doubleQuoteString = "Hello";
const backtickString = `Hello`;

const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName; // Concatenation

const age = 30;
const greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`; // Template literal

const stringWithQuote = 'It\'s a beautiful day!';
console.log(stringWithQuote);

const newLine1 = `One day you finally knew
what you had to do, and began`;
const newLine2 = "One day you finally knew\nwhat you had to do, and began";
// #endregion

// #region Type Conversions and Basic Math
// CHAPTER 3: Type Conversions and Basic Math
const numberString = "42";
const convertedNumber = Number(numberString); // Converts string to number

let a = 50, b = 50;
let x = a + b;
console.log(x); // 100

a++;
console.log(a); // 51

x--;
console.log(x); // 99

let varname = 'Hello';
console.log(varname); // Hello
// #endregion

// #region String Methods
// CHAPTER 4: String Methods
// Methods like slice, substring, and substr are used to manipulate strings.
const exampleString = "Hello, World!";
console.log(exampleString.slice(7, 12)); // "World"
console.log(exampleString.substring(7, 12)); // "World"
console.log(exampleString.substr(7, 5)); // "World"

let text = "bonjour";
console.log(text.length); // 7
console.log(text.charAt(0)); // "b"
console.log(text.charCodeAt(0)); // 98 (UTF-16 code)
console.log(text.at(-1)); // "r"
console.log(text[0]); // "b" (read-only)

console.log(text.toUpperCase()); // "BONJOUR"
console.log(text.toLowerCase()); // "bonjour"

let text2 = "le monde";
console.log(text.concat(" ", text2)); // "bonjour le monde"

console.log(text.trim()); // "bonjour" (removes whitespace from both sides)
console.log(text.padStart(10, "x")); // "xxxbonjour"
console.log(text.padEnd(10, "x")); // "bonjourxxx"
console.log(text.repeat(2)); // "bonjourbonjour"

console.log(text.replace("bonjour", "hi")); // "hi"
console.log(text.replace(/BONJOUR/i, "hi")); // "hi" (case insensitive)
console.log(text.replaceAll("bon", "Jour")); // "Jourjour"

console.log(text.split(",")); // ["bonjour"]
console.log(text.split("")); // ["b", "o", "n", "j", "o", "u", "r"]
// #endregion

// #region Operators
// CHAPTER 5: Operators
// JavaScript includes logical operators (&&, ||, !) and comparison operators (==, ===, !=, !==, >, <, >=, <=).
const andOperator = true && false; // false
const orOperator = true || false; // true
const notOperator = !true; // false

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true

console.log("01" == 1); // True
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null == 0); // false
console.log(undefined == null); // true

// Arithmetic operators
let num = 10;
num += 5; // 15
num -= 3; // 12
num *= 2; // 24
num /= 4; // 6

let age = 25;
const isAdult = age >= 18 ? "Yes" : "No";
console.log(`Is adult: ${isAdult}`); // "Yes"
// #endregion

// #region Truthy and Falsy Values
// CHAPTER 6: Truthy and Falsy Values
// Values in JavaScript can be truthy or falsy. Falsy values include false, 0, "", null, undefined, and NaN.
const truthyValue = true;
const falsyValue = false;

const falsy1 = false;
const falsy2 = 0;
const falsy3 = "";
const falsy4 = null;
const falsy5 = undefined;
const falsy6 = NaN;

console.log(!!falsy1); // false
console.log(!!falsy2); // false
console.log(!!falsy3); // false
console.log(!!falsy4); // false
console.log(!!falsy5); // false
console.log(!!falsy6); // false
// #endregion

// #region Conditionals
// CHAPTER 7: Conditionals
// Conditionals like if/else, switch statements, and ternary operators allow you to perform different actions based on conditions.
const condition = true;
if (condition) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

const fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana is selected.");
    break;
  case "apple":
    console.log("Apple is selected.");
    break;
  default:
    console.log("No fruit selected.");
}

const isAdult = age >= 18 ? "Yes" : "No";
console.log(`Is adult: ${isAdult}`);

let value = prompt('Type a number', 0);
if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}

let result = (a + b < 4) ? 'Below' : 'Over';

let a = 2 + 2;
switch (a) {
  case 3:
    alert('Too small');
    break;
  case 4:
    alert('Exactly');
    break;
  case 5:
  case 6:
    alert('Too big');
    break;
  default:
    alert("I don't know such values");
}

let userResponse = prompt('Who created JS?');
if (userResponse === 'Brendan Eich') {
  alert("Correct!");
} else {
  alert("Wrong!");
}

const hour = new Date().getHours();
if (hour < 18) {
  greeting = "Good day";
} else if (hour === 20) {
  greeting = "It's 8 man";
} else {
  greeting = "What the heck is time";
}
// #endregion

// #region Nesting
// CHAPTER 8: Nesting
// Nesting refers to placing one control structure inside another, like an if statement inside another if statement.
if (age >= 18) {
  if (age >= 21) {
    console.log("You are allowed to drink alcohol.");
  } else {
    console.log("You are an adult but not allowed to drink alcohol.");
  }
}
// #endregion

// #region JavaScript Functions Overview
// CHAPTER 9: JavaScript Functions Overview

// Basic function
function favoriteAnimal(animal) {
  return animal + " is my favorite animal";
}
console.log(favoriteAnimal("Goat")); // "Goat is my favorite animal"

// Anonymous function
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});

// Arrow function
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});

const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);
console.log(doubled); // [2, 4, 6]

// Default parameters
function showMessage(from, text = "no text given") {
  console.log(`${from}: ${text}`);
}
showMessage("Ann"); // "Ann: no text given"

// Return without value exits the function immediately
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Did parents allow you?');
}

// Condensed versions
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

// #endregion

// #region JavaScript Loops Overview
// CHAPTER 10: JavaScript Loops Overview

// While Loop
// Basic while loop
let counter = 0;
while (counter < 5) {
  console.log(`Counter is at: ${counter}`);
  counter++;
}

// Using while loop to iterate over an array
const fruits = ["apple", "banana", "cherry"];
let index = 0;
while (index < fruits.length) {
  console.log(`Fruit: ${fruits[index]}`);
  index++;
}

// For Loop
// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(`Index is: ${i}`);
}

// Using for loop to iterate over an array
const vegetables = ["carrot", "potato", "cucumber"];
for (let i = 0; i < vegetables.length; i++) {
  console.log(`Vegetable: ${vegetables[i]}`);
}

// Using for...of loop to iterate over an array
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

// Using for...in loop to iterate over object properties
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// #endregion

// #region JavaScript Arrays Overview
// CHAPTER 11: JavaScript Arrays Overview

// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const mixedArray = [1, "two", { three: 3 }, [4]];

// Accessing array elements
console.log(numbers[0]); // 1
console.log(mixedArray[2].three); // 3
console.log(mixedArray[3][0]); // 4

// Adding and removing elements
numbers.push(6); // Adds 6 to the end
numbers.unshift(0); // Adds 0 to the beginning
numbers.pop(); // Removes the last element
numbers.shift(); // Removes the first element

// Iterating over arrays
numbers.forEach(num => console.log(num));

// Array methods
const doubled = numbers.map(num => num * 2);
const filtered = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(doubled); // Array with elements doubled
console.log(filtered); // Array with even numbers
console.log(sum); // Sum of all numbers in the array

// https://www.w3schools.com/js/js_array_methods.asp

// #endregion

