// Array transformation
// .map(), .filter(), .reduce(), .reverse(),.slice(), .splice(), .sort()

// Some methods are pure, meaning that they do not modify the original array. They return a new one instead. Other methods however manipulate the array they are called on and do not return the modified array.

// map(pure)

let arr = [1, 2, 3, 4];
const newArr = arr.map((value) => value - 1);
console.log(newArr);// => [0, 1, 2, 3]
console.log(arr);// => [1, 2, 3, 4]

// filter(pure)
arr.filter((value) => value % 2 === 0);// => [2, 4]

// reduce(pure)
// Get the sum of elements
arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // => 10

// Classify the numbers by whether they are odd or not
arr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.even.push(currentValue);
    } else {
      accumulator.odd.push(currentValue);
    }

    return accumulator;
  },
  { even: [], odd: [] },
);// => { even: [2, 4], odd: [1, 3] }

// reverse
arr.reverse(); // => [4, 3, 2, 1]

// slice (pure)
arr = [1, 2, 3, 4];
arr.slice(1, 2); // [2] start at 1 finish at 2
arr.slice(1); // [2, 3, 4]
// You can also use negative numbers, that represent the indexes starting from the end of the array
arr.slice(-2); // [3, 4]

// splice
/* parameters :
the index of the element where to start modifying the array
the number of elements to delete
the elements to insert in the array (optional)
*/
arr = ['1', '2', '5', '6'];
arr.splice(2, 0, '3'); // => ['1', '2', '3', '5', '6']

// Remove 2 elements, starting at index 3 and insert 2 elements
const removed = arr.splice(3, 2, '4', '5');
console.log(removed);// => ['5', '6']
console.log(arr);// => ['1', '2', '3', '4', '5']

// Remove 1 element at index 1
arr.splice(1, 1);// => ['1', '3', '4', '5']

// sort
arr = ['c', 'a', 'z', 'b'];
const result = arr.sort();
console.log(result);// => ['a', 'b', 'c', 'z']
console.log(arr);// => ['a', 'b', 'c', 'z']

arr = [
    { name: 'Lydia', age: 7 },
    { name: 'Anne', age: 34 },
    { name: 'Holger', age: 59 },
  ];
  
  arr.sort((item1, item2) => {
    if (item1.name < item2.name) {
      return -1;
    }
    if (item1.name > item2.name) {
      return 1;
    }
    return 0;
  });
  // => [ { name: 'Anne', age: 34 }, { name: 'Holger', age: 59 }, { name: 'Lydia', age: 7 } ]
  // sort iterate on every element

  deck.sort((a, b) => a - b); // work on large arrays and sort it