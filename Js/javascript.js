console.log();
let
const

typeof
.toFixed()

Number(stringNumberVariable)

++
-- //both don't work on numbers, only variable, will output the current value, then increment it


+= -= *= /=

== and === // == test the value, === do it with the datatype too

+var // will get "number" to the number

const name = "Ali";
const greeting = `Hello, ${name}` // `` is a template literal
// you can use ${} only with template literal

const newLine = `One day you finally knew
what you had to do, and began `;

const newLine = "One day you finally knew\nwhat you had to do, and began"

Number() String()

let text="bonjour";

text.length;

text.charAt()
text.charCodeAt() // UTF-16 code
text.at() // allow negative position
text[] // read only

text.slice(start, end)
text.substring(s, e) // s and e value less than 0 are treated as 0
text.substr(s, length)

text.toUpperCase()
text.toLowerCase()

text.concat(" ", text2); // text + " " + text2

text.trim() // remove whitespace from both side
text.trimStart() 
text.trimEnd()

text.padStart(4, "x") // will add 4 x at start
text.padEnd() // both are not supported on explorer

text.repeat(2) // not supported on explorer

text.replace("bonjour", "hi")     
text.replace(/BONJOUR/i, "hi") // case insensitive

text.replaceAll("bon", "Jour") // ! explorer

text.split(",") // return array
text.split("") // array of single characters

"01" == 1 // True, "01" become number 1

0 == false // true
0 === false // false 

null > 0 // false, converted to 0
null >= 0 // true
but null == 0 // false, doesnt convert to a number here :|

undefined == null 

undefined > < ==, only equal : Nan Nan null

" so avoid using >= > < <= with a variable which may be null/undefined "


if (hour < 18) {
    greeting = "Good day";
} else if (hour = 20) {
    greeting = "Its 8 man"
} else {
    greeting = "what the fuck is time"
}

|| // OR, meant for bool, if any arg are true, it return true, otherwise it return false (can convert value to bool)
// Return the first truthy value or the last falsy if no true
false || alert("printed");

&& // AND, return true only if every value is true, otherwise return the last, return the first falsy value or the last if none is

Precedence && > ||

! // Not, give the inverse as a bool, !! give just the bool, or use 
Boolean()

?? //Nullish coalescing


const greating = isBirthday
    ? "Happy birthday !"
    : "Good morning."

let result = condition ? value1 : value2;

// condition is evaluated, if it is truthy then value1 is returned else value2

let accessAllowed = ( age > 18 ) ? true : false;



let age = prompt('age?', 18); // will prewrite 18
let message = (age < 3) ? 'Hi baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';
alert( message );

if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }


let userResponse = prompt('who created js');
if (userResponse === 'he') {
    alert("ye");
} else {
    alert("jo");
}

let value = prompt('Type a number', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}

let result2 = (a+b < 4) ? 'Below' : 'Over';


let a = 2 + 2;
switch (a) {
    case 3: // if a === 3
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

+prompt()    prompt() // with the + the value will convert the string to number



