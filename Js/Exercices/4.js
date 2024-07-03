function removeFromArray (array, ...args) {
    const newArray = [];
    array.forEach(item => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

console.log(removeFromArray([1,2,3,4], 1, 3))