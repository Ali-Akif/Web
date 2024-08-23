// Prototype syntax
// this. , .prototype. , class, get, set


// Constructor Function
//the convention is that the function name should start with a capital letter. Instances (objects) are derived from the template using the new keyword when invoking the constructor function.

// Intance Fields
function Car(color, weight) {
    this.color = color;
    this.weight = weight;
    this.engineRunning = false;
  }
  
const myCar2 = new Car('red', '2mt');
myCar.color;
// => 'red'
myCar.engineRunning;
// => false

// Instance Methods
function Car() {
this.engineRunning = false;
// ...
}

Car.prototype.startEngine = function () {
this.engineRunning = true;
};

Car.prototype.addGas = function (litre) {
// ...
};

const myCar3 = new Car();
myCar.startEngine();
myCar.engineRunning;
// => true

// CLASS

class Car {
constructor(color, weight) {
    this.color = color;
    this.weight = weight;
    this.engineRunning = false;
}

startEngine() {
    this.engineRunning = true;
}

addGas(litre) {
    // ...
}
}

const myCar4 = new Car();
myCar.startEngine();
myCar.engineRunning;
// => true

// Get Set
class Car {
constructor() {
    this._mileage = 0;
}

get mileage() {
    return this._mileage;
}

set mileage(value) {
    throw new Error(`Mileage cannot be manipulated, ${value} is ignored.`);
    // Just an example, usually you would not provide a setter in this case.
}
}

const myCar = new Car();
myCar.mileage;
// => 0
myCar.mileage = 100;
// => Error: Mileage cannot be manipulated, 100 is ignored.