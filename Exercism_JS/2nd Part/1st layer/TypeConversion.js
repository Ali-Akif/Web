// Type Conversion

// Boolean(), Number(), String()

/*
Type Coercion

Happen on the ocndition of an if statement, 
the first operand of the ternary operator ?
the ioerand if the logical NOT operator!
the operands of the logical && ans || operators

Many operators coerce the operands into numbers (if necessary)
Arithmetic operators: + (if no string is involved), -, *, /, %, **
Relational operators (for non-string operands): >, >=, <, <=
Bitwise operators: |, &, ^, ~
*/

const elements = ["hello","I","Am","Akif"];
console.log(elements.join()) //=> 'hello,I,Am,Akif'
elements.join("")//=> 'helloIAmAkif'

String.split()

export function luckyNumber(value) { // Receive a number
    let value2 = String(value).split(''); // COnvert to string then split it in an array
    value2 = value2.reverse(); // reverse the array
    value2 = value2.join(''); // join the reverse array
  
    return value === Number(value2)
  }

export function errorMessage(input) {
if (Boolean(input) === false) {
    return 'Required field'
} else if (Boolean(Number(input)) === false) { // Convert str input to a number or nan if empty, then bool
    return 'Must be a number besides 0'
} else {
    return ''
}
}