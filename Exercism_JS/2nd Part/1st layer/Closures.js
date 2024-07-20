// Top-level declarations are global-scope
const dozen = 12;

{
  // Braces create a new block-scope
  // Referencing the outer variable is a closure.
  const twoDozen = dozen * 2;
}

// Functions create a new function-scope and block-scope.
// Referencing the outer variable here is a closure.
function nDozen(n) {
  return dozen * n;
}

export function scale2d(sx, sy) {
    return function (x, y) {
     return [x * sx, y * sy];
   }
 }
 

// Dans l'exemple d'en haut, scale2d sera appliqué a une variable, et la fonction qui en sortira auta toujours acces a la fonction scale2d et a n'importe quelle variable interne a celle ci

export function memoizeTransform(f) {
    let lastArgs = null;
    let lastResult = null;
    
    return function(x, y) {
      if (lastArgs && lastArgs[0] === x && lastArgs[1] === y) {
        return lastResult;
      }
      
      lastArgs = [x, y];
      lastResult = f(x, y);
      return lastResult;
    }
  }