// Arrow Function & Array analysis
function addUpTwoNumbers(num1, num2) {
    return num1 + num2;
  }
// function keyword removed and => added
const addUpTwoNumbers = (num1, num2) => {
return num1 + num2;
};

//If the function body contains only a return statement, like in the example above, the {} and the return keyword can be omitted. If there is only one parameter, the parenthesis () can be omitted as well.
const addUpTwoNumbers = (num1, num2) => num1 + num2;
const square = num => num * num;


// Array analysis
let numbers = [1, 'two', 3, 'four'];
numbers.indexOf('two'); // => 1

numbers.includes(1);// => true
numbers.includes('one');// => false

numbers = [1, 3, 5, 7, 9];
numbers.every((num) => num % 2 !== 0); // => true

numbers.some((num) => num % 2 !== 0);// => true if at least one elmeent passes test

numbers.find((num) => num < 5); // => 1

numbers.findIndex((num) => num > 7);// => 4
numbers.findIndex((num) => num > 9);// => -1 = none