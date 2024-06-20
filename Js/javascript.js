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




