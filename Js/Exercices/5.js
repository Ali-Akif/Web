function sumAll(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) [min, max] = [max, min];
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  };


console.log(sumAll(2,5));

function sumAll(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      return "ERROR";
    }
    if (min < 0 || max < 0) {
      return "ERROR";
    }
    if (min > max) {
      [min, max] = [max, min];
    }
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
  
console.log(sumAll(2, 5));