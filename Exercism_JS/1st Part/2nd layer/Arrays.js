// Array

const numbers = [1, 'two', 3, 'four'];

numbers[2]; // => 3
numbers.length; // => 4

numbers[0] = 'one';
numbers; // => ['one', 'two', 3, 'four']

numbers.push(5); // => 5 return the new length of the array
numbers; // => [1, 'two', 3, 'four', 5]

numbers.pop(); // => four return the poped element
numbers; // => [1, 'two', 3]

numbers.shift(); // => 1 return the removed element
numbers; // => ['two', 3, 'four']

numbers.unshift('one'); // => 5 return the new length of the array
numbers; // => ['one', 1, 'two', 3, 'four']

numbers.splice(2, 1, 'one'); // => [3] return an array containing the deleted element
numbers; // => [1, 'two', 'one', 'four']
// array.splice(début, nbASupprimer[, élem1[, élem2[, ...]]])
// Si nbASupprimer est 0, il va simplement ajouter l'element a l'index
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#exemples
// Dans la zone Exemples