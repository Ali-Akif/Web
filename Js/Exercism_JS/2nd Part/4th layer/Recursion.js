// Recursion

function recurse() {
    // ...
    recurse();
    // ...
  }

function countDown(fromNumber) {
   for (let i = fromNumber; i > 0; i--) {
      console.log(i);
    }
}
  
  countDown(3); // 3, 2, 1 in separate lines
  
function countDown(fromNumber) {
    console.log(fromNumber);
    if (fromNumber > 1) {
      countDown(fromNumber - 1);
    }
}
countDown(3); // same result

function sum(n) {
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
  }
  
  sum(3); // 6