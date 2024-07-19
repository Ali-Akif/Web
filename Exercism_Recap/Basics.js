// Variables
// const let var, function, import export

//Variables are written in camelCase
//Constant are written in SCREAMING_SNAKE_CASe


let myFirstVariable = 1;
myFirstVariable = 'Some string';
myFirstVariable = new SomeComplexClass();

const MY_FIRST_CONSTANT = 10;
// Can not be re-assigned.
MY_FIRST_CONSTANT = 20;
// => TypeError: Assignment to constant variable.


function add(num1, num2) {
    return num1 + num2;
  }
add(1, 3); // => 4

// file.js
export const MY_VALUE = 10;
export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from './file';
add(MY_VALUE, 5);
// => 15