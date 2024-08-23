// Sets

// new Set(), set.add(), set.has(), set.delete(), set.size, [...set]

const set = new Set();
const object = { color: 'lime green' };
const functionallyIdenticalObject = { color: 'lime green' };

set.add(object);
set.add('wow');
set.add(77);

console.log(set.size);
//=> 3

set.add(functionallyIdenticalObject); // added because functionallyIdenticalObject is not strictly equal to object
console.log(set.size);
//=> 4

set.add(77); // not added because 77 is strictly equal to 77
console.log(set.size);
//=> 4

// stocker certaines valeurs, sans index, et sans répétition

set = new Set(array); // convert array to set
[...set] // spread the set in an array
set.has() // return a bool if the element inside () is present on the set
set.delete()
set.size // return size

