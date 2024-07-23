// Regex

let regex = /[a-z]/;
regex = new RegExp('[a-z]');

/*
/g - Global Search
/i - Case Insensitive
/m - Multiline Searc
*/
const re = /home/gi;
const str = 'Home, sweet home.';
const myArray = str.match(re);
console.log(myArray); // ["Home", "home"]

regex = /[a-z]/gi; // literal notation
regex = new RegExp('[a-z]', 'gi'); // constructor with string pattern as first argument
regex = new RegExp(/[a-z]/, 'gi'); // constructor with regular expression literal as first argument (Starting with ECMAScript 6)

// Test 
str = 'It is difficult to test if you have a virus';
const result = /virus$/.test(str);
console.log(result); // => true

// Match
const funnyQuote ='If you see someone crying, ask if it is because of their haircut.';
const regex1 = /someone/;
const regex2 = /happy/;
funnyQuote.match(regex1);// => ["someone", index: 11, input: "If you see someone crying, ask if it is because of their haircut.", groups: undefined]
funnyQuote.match(regex2);// => null

const funnyQuoteG = 'If you see someone crying, ask if it is because of their haircut.';
const regex3 = /if/gi;
funnyQuote.match(regex3);// => ["If", "if"];

// Replace  string.replace(searchValue, newValue);
string = 'I like dogs!';
result = string.replace('dogs', 'cats');

string = 'I would love to travel to Japan';
result = string.replace(/Japan/g, 'Hawaii');

let text = 'Say hello to the chatbot.';
result = text.replace(/chatbot|hello/gi, function (word) {
  return word.toUpperCase();
}); // => "Say HELLO to the CHATBOT"

// Split
str = 'hello,user.how are.you';
result = str.split(/[,.\s]/);
console.log(result); // => ['hello', 'user', 'how', 'are', 'you']


// Example
const phonePattern = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/;
/*
. ^ asserts the start of the string.
. \(\+\d{2}\) matches the country code part with parentheses and a plus sign followed by exactly two digits.
. (a space) matches the space after the country code.
. \d{3} matches exactly three digits.
. - matches the hyphen.
. \d{3} matches another set of three digits.
. - matches another hyphen.
. \d{3} matches the final set of three digits.
. $ asserts the end of the string.
*/
if (phonePattern.test(number)) {
    // ...
}