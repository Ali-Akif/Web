// Array Loop
// for (.. of ..), .forEach((number, index) => {})


// for... of when you don't need the index

let numbers = [6, 10, 23];
for (const number of number) {
    console.log(number); // 6 n/ 10 n/ 23
}

// forEach no break or continue
numbers.forEach((number, index) => console.log(number, index)); // 6 0 n/ 10 1 n/ 23 2
