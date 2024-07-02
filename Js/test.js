// function favoriteAnimal(animal){
//     return animal + " is my favorite animal "
// }

// console.log(favoriteAnimal("Goat"))


//  // fonction de base
// function logKey(event) {
//     console.log(`You pressed "${event.key}".`);
// }
// textBox.addEventListener("keydown", logKey);

// // anonyme
// textBox.addEventListener("keydown", function (event) {
//     console.log(`You pressed"${event.key}".`);
// }); // This is one line of code.

// // Arrow
// textBox.addEventListener("keydown", (event) => {
//     console.log(`You pressed"${event.key}".`);
// });


// const originals = [1,2,3];

// const doubled = originals.map(item => item * 2);

// console.log(doubled);

// // when you call a parameter et modify it inside a function its a copy, but you can modify outer variables if its not given as a parameter, there's a subtility with primary types too

// // When parameter is not provided it return undefined

// // so to give a default you make parameter=... 
// function showMessage(from, text = "no text given") {
//     alert( from + ": " + text );
//   }
  
//   showMessage("Ann"); // Ann: no text given
//   // you can call function as default too

//  // return without value exit the function immediatly
//  //return == return;

//  //return (hzeuiochiuzeiu)

//  function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

//   function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
//   }
//   function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
//   }
  

// function add7 (number) {
//     return number + 7
// }

// function multiply(x,y) {
//     return x * y
// }

// function capitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
// }

// function lastLetter(string) {
//     return string.at(-1)
// }

// console.log(add7(5))
// console.log(multiply(5,5))
// console.log(capitalize("bdjkjisR"))
// console.log(lastLetter("biehauhcu"))


// // Reference error
// try {
//   let a = undefinedVariable;
// } catch (e) {
//   console.log(e instanceof ReferenceError); // true, SyntaxError, TypeError
//   console.log(e.message); // "undefinedVariable is not defined"
//   console.log(e.name); // "ReferenceError"
//   console.log(e.stack); // Stack of the error
// }

// /* 
// Try Block Execution: The code inside the try block is executed.
// Error Occurrence: If an error occurs, execution stops, and the error is passed to the catch block.
// Catch Block Execution: The catch block handles the error using the error object.
// Continuation: After handling the error, the program continues with the next statement after the try...catch block. 
// The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

// The SyntaxError object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.

// A TypeError may be thrown when:
// an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
// when attempting to modify a value that cannot be changed; or
// when attempting to use a value in an inappropriate way.
// */

//  // Good
//  function getPlayerScore();
//  function getPlayerName();
//  function getPlayerTag();
 
//  // Bad
//  function getUserScore();
//  function fetchPlayerName();
//  function retrievePlayer1Tag();
 
//  // Good
// const numberOfThings = 10;
// const myName = "Thor";
// const selected = true;

// // Bad (these start with verbs, could be confused for functions)
// const getCount = 10;
// const isSelected = true;

// // Good
// function getCount() {
//   return numberOfThings;
// }

// // Bad (it's a noun)
// function myName() {
//   return "Thor";
// }


// const cars = [
//   "Saab",
//   "Volvo", 
//   "BMW"
// ];

// const cars2 = new Array("Saab", "Volvo", "BMW");

// cars.toString(); // Saab,Volvo,BMW
// const person = {firstName:"John", lastName:"Doe", age:46};

// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

// cars.length   // Returns the number of elements
// cars.sort()   // Sorts the array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1]; // last element


// fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
// fruits.forEach(myFunction);

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person.length;     // Will return 0
// person[0];         // Will return undefined

// Array.isArray(fruits);
// ="Array: " + (fruits instanceof Array);

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }

// const myArray = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;


// for (let i = 0; i < myArray.length; i++) {
//   sum += myArray[i]
// }

// console.log(sum)

const a = ["A","B"];
a.push("C")
a[2] = [ 1, 2, 3 ]
console.log(a)