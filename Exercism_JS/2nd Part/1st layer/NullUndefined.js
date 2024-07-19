// Null

let name = null; // Empty value
// Undefined represent the total absence of a value


// Optional Chaining
const obj = {
    address: {
      street: 'Trincomalee Highway',
      city: 'Batticaloa',
    },
};
obj.address.zipCode;
// => undefined
obj.residence.street;
// => TypeError: Cannot read property 'street' of undefined
obj.residence?.street;
// => undefined


// Nullish Coalescing
// It returns the right-hand side operand only when the left-hand side operand is null or undefined. Otherwise, the left-hand side operand is returned.
let amount = null;
amount = amount ?? 1;
// => 1
amount = 0;
amount = amount ?? 1;
// => 0