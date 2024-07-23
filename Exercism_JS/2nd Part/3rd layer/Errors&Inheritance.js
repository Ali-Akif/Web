// Errors

const error = new Error('Oops, something went wrong');  
console.log(error.message);
// => "Oops, something went wrong"

//Using the throw syntax, you can throw an Error.
throw new Error('Oops');

//When an error is thrown, the current execution is stopped and resumes in the first catch block of the call stack.
try {
  throw new Error('Oops');
} catch (error) {
  console.log(error.message);
  // => "Oops"
}

// Inheritance
class Pet {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`This is my pet, ${this.name}.`);
    }
  }
class Dog extends Pet {}
const dog = new Dog('Otis');
dog.introduce(); // => This is my pet, Otis.
//The extends keyword in the child class declaration establishes a relationship with the parent class through the prototype chain.

Dog.prototype.isPrototypeOf(dog); // => true
Pet.prototype.isPrototypeOf(dog); // => true
Pet.prototype.isPrototypeOf(Dog.prototype); // => true

Pet.prototype.hasOwnProperty('introduce'); // => true
Dog.prototype.hasOwnProperty('introduce'); // => false
dog.hasOwnProperty('introduce'); // => false

class CustomError extends Error {}

try {
  // ... Code that may throw an error
} catch (error) {
  if (error instanceof CustomError) {
    console.log('The error thrown is an instance of the CustomError');
  }
}

// practice 
export function monitorTheMachine(actions) {
    try {
      actions.check();
    } catch (error) {
      if (error instanceof ArgumentError) {
        return actions.alertDeadSensor();
      } else if (error instanceof OverheatingError) {
        if (error.temperature < 600) {
          actions.alertOverheating();
        } else {
          actions.shutdown()
        }
      } else {
        throw error;
      }
    }
  }