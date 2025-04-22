// 1. What is the Spread Operator?
// The spread operator (`...`) allows you to unpack elements from an array or properties from an object and insert them into another array or object.
// It's a powerful tool for working with arrays, objects, and function arguments.

// Real-World Analogy:
// Imagine you're at a buffet, and you take a few dishes from the table and spread them out onto your plate. 
// Similarly, the spread operator takes elements from an array or object and spreads them into a new array or object.


// 2. Using the Spread Operator with Arrays
// The spread operator can be used to unpack the values from an array and put them into a new array or combine multiple arrays.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using spread operator to combine two arrays
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// You can also use it to clone an array (without referencing the original array)
const arrCopy = [...arr1];
console.log(arrCopy); // Output: [1, 2, 3]

// 3. Using the Spread Operator with Objects
// The spread operator can also be used to copy properties from one object into another or combine multiple objects.

const persona = { name: "John", age: 30 };
const address = { city: "New York", country: "USA" };

// Combining objects using the spread operator
const personWithAddress = { ...persona, ...address };
console.log(personWithAddress); 
// Output: { name: "John", age: 30, city: "New York", country: "USA" }

// Cloning an object
const personClone = { ...person };
console.log(personClone); // Output: { name: "John", age: 30 }

// 4. Using Spread Operator in Function Arguments
// The spread operator can be used to expand elements of an array as individual arguments in a function.

const numbers = [1, 2, 3, 4, 5];

// Using spread operator to pass elements of an array as individual arguments to a function
const sum = (a, b, c, d, e) => a + b + c + d + e;
console.log(sum(...numbers)); // Output: 15

// 5. Using Spread with Function Parameters (Rest & Spread)
const sumAll = (...args) => args.reduce((acc, num) => acc + num, 0);
const numbersToAdd = [10, 20, 30, 40];
console.log(sumAll(...numbersToAdd)); // Output: 100

// 6. Spread Operator in JSX (React Example)
// In React, you can use the spread operator to pass props to components or copy an object’s properties into a new object.

const person = { name: "Alice", age: 25 };

const PersonCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};

// Using spread operator to pass all properties of the person object as props
<PersonCard {...person} />

// 7. Summary of the Spread Operator
// - The spread operator (`...`) is used to unpack values from arrays or properties from objects.
// - It can combine arrays or objects, clone them, or spread elements in function calls.
// - In React, the spread operator is often used to pass props or copy an object’s properties into new objects.

