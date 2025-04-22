// 1. What is Destructuring?
// Destructuring is a concise way to extract values from arrays or objects and assign them to variables.
// It allows you to unpack values from arrays or properties from objects in a more readable way.

// Real-World Analogy:
// Think of destructuring as unpacking a box. Instead of manually taking each item out one by one,
// you can grab multiple items in one go, making the process faster and easier.

// 2. Destructuring Arrays
// When destructuring an array, you extract values based on their position in the array.

const numbers = [10, 20, 30];

// Using array destructuring to assign values to variables
const [a, b, c] = numbers;

console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); // Output: 30

// You can also skip values by leaving a blank space in the destructuring.
const [x, , z] = numbers;
console.log(x); // Output: 10
console.log(z); // Output: 30

// You can also assign default values in case an array value is missing.
const [p, q = 5] = [1];
console.log(p); // Output: 1
console.log(q); // Output: 5 (default value)

// 3. Destructuring Objects
// Destructuring objects allows you to extract properties from an object and assign them to variables by name.

const person = {
  name: "John",
  age: 25,
  city: "New York"
};

// Using object destructuring to assign values to variables
const { name, age, city } = person;

console.log(name); // Output: John
console.log(age);  // Output: 25
console.log(city); // Output: New York

// You can also assign variables with a different name.
const { name: fullName, age: years } = person;
console.log(fullName); // Output: John
console.log(years);    // Output: 25

// You can assign default values in case a property is missing in the object.
const { gender = "Male" } = person;
console.log(gender); // Output: Male (default value)

// 4. Destructuring Nested Objects
// You can destructure objects inside other objects (nested destructuring).

const user = {
  id: 1,
  details: {
    name: "Alice",
    age: 30
  }
};

// Using nested object destructuring
const { details: { nam, ag } } = user;
console.log(nam); // Output: Alice
console.log(ag);  // Output: 30

// 5. Destructuring Function Parameters
// You can also destructure objects or arrays directly in function parameters to make the code cleaner.

function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const personData = { name: "Bob", age: 40 };
printPerson(personData); // Output: Name: Bob, Age: 40

// Destructuring in array parameters:
function sum([x, y]) {
  return x + y;
}

const nums = [10, 20];
console.log(sum(nums)); // Output: 30

// 6. Rest Pattern with Destructuring
// The rest pattern allows you to capture the remaining items into an array or object.

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest);  // Output: [2, 3, 4, 5]

// Rest pattern with objects:
const { name: userName, ...otherDetails } = person;
console.log(userName); // Output: John
console.log(otherDetails); // Output: { age: 25, city: 'New York' }

// 7. Summary of Destructuring
// - Destructuring is a shorthand for extracting values from arrays and objects.
// - It improves code readability and reduces the need for repetitive code.
// - You can destructure arrays and objects, use default values, rename variables, and capture remaining properties (rest pattern).

