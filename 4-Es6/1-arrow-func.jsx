// 1. What is an Arrow Function?
// Arrow functions provide a shorter syntax for writing functions in JavaScript.
// They are especially useful when you need simple, inline functions.
// Arrow functions are more concise and are often used in situations where a function 
// is passed as an argument or used for quick calculations.

// Basic syntax of an arrow function:
const add = (a, b) => a + b; // Single expression, return is implied
console.log(add(2, 3)); // Output: 5

// Arrow function with a block:
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 3)); // Output: 6


// 2. Why Use Arrow Functions?
// - **Conciseness**: They are shorter and easier to read, especially for small functions.
// - **Lexical `this`**: Arrow functions don't have their own `this` context; instead, they inherit it from the surrounding code.
// - Great for **callbacks** and **inline functions**.


// 3. Arrow Function with Single Parameter (without parentheses):
const greet = name => `Hello, ${name}!`; // No need for parentheses when there's only one parameter.
console.log(greet("John")); // Output: Hello, John!

// Arrow Function with Multiple Parameters (with parentheses):
const adds = (a, b) => a + b; 
console.log(add(10, 20)); // Output: 30


// 4. `this` in Arrow Functions
// The value of `this` in arrow functions is determined by the surrounding context.
// Unlike regular functions, arrow functions do **not** have their own `this`.
// Instead, they inherit `this` from the enclosing scope at the time of their creation.

// Real-World Analogy:
// Imagine you are in a meeting. A **regular function** has its own agenda and takes its own notes.
// An **arrow function**, on the other hand, simply listens to the main meeting (parent scope) and follows its agenda (inherited `this`).

// Example of `this` in a regular function:
const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`); // `this` refers to the `person` object.
  }
};
person.greet(); // Output: Hello, my name is Alice.

// Example of `this` in an arrow function:
const personWithArrow = {
  name: "Bob",
  greet: () => {
    console.log(`Hello, my name is ${this.name}.`); // `this` does NOT refer to `personWithArrow`.
  }
};
personWithArrow.greet(); // Output: Hello, my name is undefined.

// Why is this different?
// In the arrow function, `this` is inherited from the surrounding context (the global scope or parent function),
// not from the `personWithArrow` object. That's why `this.name` is `undefined` in this case.


// 5. Arrow Function in Event Handlers
// One common use case for arrow functions is in event handlers, where `this` is often not what you expect.
// With arrow functions, `this` will refer to the surrounding context rather than the event target.

const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log(this); // `this` refers to the surrounding context, not the button element.
});
