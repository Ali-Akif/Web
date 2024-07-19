// Switch Statement & While loops

while (condition) {
// code that is executed repeatedly as long as the condition is true
}
do {
// The code here will always be executed once and then
// repeatedly while the condition is true.
} while (condition);

let i = 0;
while (i < 100) {
    i = i + 2;
    if (i % 3 === 0) {
        continue;
    }
    // The code here will only be executed when i was not divisible by 3 in the check above.
}


switch (x) {
    case option1:
      // code that is executed when "x === option1" is true
      break;
    case option2:
    case option3:
      // code that is executed when "x === option2" is true
      break;
    default:
      // code that is executed when x does not equal any of the options
  }
  