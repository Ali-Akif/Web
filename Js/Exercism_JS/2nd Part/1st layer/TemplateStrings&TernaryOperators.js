// Template String & Ternary Operator
// `${}`,  Ternary Operator(condition ? true : false), .ToFixed()


const num1 = 1;
const num2 = 2;
`Adding ${num1} and ${num2} gives ${num1 + num2}.`; //  Any non-string types are implicitly converted to strings.

const track = 'JavaScript';
`This track on exercism.org is ${track.toUpperCase()}.`;

`This is an example of using template
strings to accomplish multiple
lines`;


// Ternary operator
let grade = 95;
`You have ${grade > 90 ? 'passed' : 'failed'} the exam.`; // => You have passed the exam.

grade = 95;
const result = grade > 90 ? 'passed' : 'failed';
console.log(result); // Output: 'passed'

function checkGrade(grade) {
    return grade > 90 ? 'passed' : 'failed';
}

grade = 85;
const message = grade > 90 ? 'Excellent' : grade > 75 ? 'Good' : 'Needs Improvement';

num1.toFixed(2) //round up the decimal to only 2 digit