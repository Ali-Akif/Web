function favoriteAnimal(animal){
    return animal + " is my favorite animal "
}

console.log(favoriteAnimal("Goat"))


 // fonction de base
function logKey(event) {
    console.log(`You pressed "${event.key}".`);
}
textBox.addEventListener("keydown", logKey);

// anonyme
textBox.addEventListener("keydown", function (event) {
    console.log(`You pressed"${event.key}".`);
}); // This is one line of code.

// Arrow
textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed"${event.key}".`);
});


const originals = [1,2,3];

const doubled = originals.map(item => item * 2);

console.log(doubled);

// when you call a parameter et modify it inside a function its a copy, but you can modify outer variables if its not given as a parameter, there's a subtility with primary types too

// When parameter is not provided it return undefined

// so to give a default you make parameter=... 
function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
  showMessage("Ann"); // Ann: no text given
  // you can call function as default too

 // return without value exit the function immediatly
 //return == return;

 //return (hzeuiochiuzeiu)

 function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }
  

function add7 (number) {
    return number + 7
}

function multiply(x,y) {
    return x * y
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function lastLetter(string) {
    return string.at(-1)
}

console.log(add7(5))
console.log(multiply(5,5))
console.log(capitalize("bdjkjisR"))
console.log(lastLetter("biehauhcu"))


// Reference error
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true, SyntaxError, TypeError
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack of the error
}

/* 
Try Block Execution: The code inside the try block is executed.
Error Occurrence: If an error occurs, execution stops, and the error is passed to the catch block.
Catch Block Execution: The catch block handles the error using the error object.
Continuation: After handling the error, the program continues with the next statement after the try...catch block. 
The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

The SyntaxError object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.

A TypeError may be thrown when:
an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
when attempting to modify a value that cannot be changed; or
when attempting to use a value in an inappropriate way.
*/