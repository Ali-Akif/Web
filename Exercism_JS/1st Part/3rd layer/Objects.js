// Object

// key-value

// Key must be a string, Value can be anything else

const emptyObject = {};

const obj = {
  favoriteNumber: 42,
  greeting: 'Hello World',
  useGreeting: true,
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
  fruits: ['melon', 'papaya'],
  addNumbers: function (a, b) {
    return a + b;
  }
};


const obj2= {
    '1keyStartsWithNumber': '...',
    'key/with/slashes': '...',
    'key-with-dashes': '...',
    'key with spaces': '...',
    '#&()[]{}èä樹keyWithSpecialChars': '...',
  };

// can do += and all on value 
const obj3 = { greeting: 'hello world' };
obj3.greeting;
// => hello world
obj3['greeting'];
// => hello world
// Bracket notation also works with variables.
const key = 'greeting';
obj3[key];
// => hello world


const obj4 = { greeting: 'hello world' };
obj4.greeting = 'Hi there!';
obj4['greeting'] = 'Welcome.';
obj4.newKey1 = 'new value 1';
obj4['new key 2'] = 'new value 2';
const key2 = 'new key 3'; // Dot notation is when you know the name
obj4[key2] = 'new value 3'; // Bracket notation is for a variable


const obj5 = {
    key1: 'value1',
    key2: 'value2',
  };
delete obj5.key1;
delete obj5['key2'];
obj['address']['city'];
// => 'Batticaloa'


const obj6 = { greeting: 'hello world' };
obj6.hasOwnProperty('greeting');
// => true
obj6.hasOwnProperty('age');
// => false

for (let key in obj) {
    console.log(key, obj[key]);
}