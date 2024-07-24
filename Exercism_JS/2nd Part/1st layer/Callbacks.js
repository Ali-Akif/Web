// Callback functions
// A callback is a function passed as an argument to another function


const sideLength = 5;

// Caller function takes a callback function
function applySideLength(callback) {
  return callback(sideLength);
}

// Callback must expect the possible argument from the calling function
function areaOfSquare(side) {
  return side * side;
}

applySideLength(areaOfSquare); // => 25


applySideLength(function squarePerimeterLength(side) {return side * 4;});