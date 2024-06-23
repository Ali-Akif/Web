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
