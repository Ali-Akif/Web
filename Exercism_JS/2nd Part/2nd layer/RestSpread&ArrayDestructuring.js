// Rest and spread & Array destructuring

const numberOfMoons = [0, 2, 14];
const [venus, mars, neptune] = numberOfMoons;

neptune;// => 14


// Rest
// When ... appears on the left-hand side of an assignment, those three dots are known as the rest operator. The three dots together with a variable name is called a rest element. It collects zero or more values, and stores them into a single array.

const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];

everythingElse; // => [1, 2, 3, 5, 8]

// Spread
// When ... appears on the right-hand side of an ASSIGNEMENT, it's known as the spread operator. It expands an array into a list of elements. Unlike the rest element, it can appear anywhere in an array literal expression, and there can be more than one.
export function insertFaceCards(deck) {
    const [FIRST, ...REST] = deck // [first, [REST]]
    const NEW_DECK = [FIRST, 'jack','queen','king', ...REST]; // [First, jack, queen, king, RESt deconstructed]
    return NEW_DECK
  }

const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];

oneToTen; // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function discardTopCard(deck) {
    const [ A, ...REST ] = deck;
    return [A, REST]
  }


//

const [,x,] = oneToFive; // Return second element
[ deck[1], deck[0] ] = [ deck[0], deck[1]];
// On left side, the actual position, on right side, the new position

arr.slice(début, fin);

