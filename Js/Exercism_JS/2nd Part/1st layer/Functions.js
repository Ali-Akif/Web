// Functions
// function ...(), defaultValue, const F = F(..){..}, const obj = { functionName : function(param() {}} 


function someName(param1, param2, param3) {
    // ...
  }

//For all other values (objects, arrays, functions), a reassignment will not affect the original value. However, if you modify such an argument (e.g. add a key to an object), that also modifies the original value that was passed in.

function someName(param1 = defaultValue1, param2 = defaultValue2) { // Else automatic undefined
    // ...
  }

function divide(a, b) {
return {
    quotient: Math.floor(a / b),
    remainder: a % b,
};
}

// Function expression
const someFunction = function (param) {
    // ...
  };
  
  someOtherFunction(function (param) {
    // ...
  });
  
  const obj = {
    someFunction: function (param) {
      // ...
    },
  };