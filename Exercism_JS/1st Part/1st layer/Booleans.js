// Boolean

// A boolean represents one of two values: true or false. Logical operators (!, &&, ||) are typically used with boolean values and they return a boolean value.

// The logical AND operator (&&) returns the first falsy value encountered, or the last value if all are truthy.
// The logical OR operator (||) returns the first truthy value encountered, or the last value if all are falsy.

// Precedence is from high to low ! && ||
return ( petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake)
