// Template String & Ternary Operator

const num1 = 1;
const num2 = 2;
`Adding ${num1} and ${num2} gives ${num1 + num2}.`; //  Any non-string types are implicitly converted to strings.

const track = 'JavaScript';
`This track on exercism.org is ${track.toUpperCase()}.`;

`This is an example of using template
strings to accomplish multiple
lines`;


// Ternary operator
const grade = 95;
`You have ${grade > 90 ? 'passed' : 'failed'} the exam.`;
// => You have passed the exam.

// .toFixed(2) round up the decimal to only 2 digit