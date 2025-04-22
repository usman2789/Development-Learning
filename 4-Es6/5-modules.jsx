// 1. What are Modules in JavaScript?
// In JavaScript, a module is a file containing code that can be shared and reused across different parts of your application.
// ES6 introduced a formalized syntax for modules to help developers organize and structure their code better.
// You can think of a module as a "container" where you put related code (functions, variables, classes), 
// and then "export" it to be used in other parts of the app, like "importing" a package from a store.

// 2. Exporting in ES6
// Exporting allows a module to share specific pieces of code (functions, variables, classes) with other files.

// 2.1 Named Exports (Multiple Exports)
// With named exports, you can export multiple elements from a module and import them by their name in other files.

export const greet = () => {
    console.log("Hello, world!");
  };
  
  export function add(a, b) {
    return a + b;
  }
  
  export const number = 10;
  
  // 2.2 Default Export (One Export per File)
  // A module can have one default export. This is useful when the module is exporting a single main thing, 
  // like a class or a function. You can import a default export without curly braces.
  
  export default class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }
  
  // 3. Importing in ES6
  // Importing allows you to use code from other modules by importing specific functions, variables, or classes.
  
  import { greet, add, number } from './utils'; // Importing named exports from 'utils.js'
  
  console.log(number); // Output: 10
  greet(); // Output: Hello, world!
  console.log(add(2, 3)); // Output: 5
  
  // 3.1 Importing a Default Export
  // When you import a default export, you can give it any name (the name doesn't have to match the exported name).
  
  import Person from './Person'; // Importing the default export (Person class)
  
  const john = new Person("John");
  john.greet(); // Output: Hello, John!
  
  // 3.2 Renaming Named Imports
  // You can also rename named imports using the `as` keyword.
  
  import { greet as sayHello, add as sum } from './utils';
  
  sayHello(); // Output: Hello, world!
  console.log(sum(10, 20)); // Output: 30
  
  // 4. Example with Multiple Files
  // Let's imagine you have two separate files: 'utils.js' and 'app.js'.
  // In 'utils.js', you have functions, and in 'app.js', you import them.
  
  // File: utils.js
  export const multiply = (a, b) => a * b;
  export const divide = (a, b) => a / b;
  
  // File: app.js
  import { multiply, divide } from './utils';
  
  console.log(multiply(3, 4)); // Output: 12
  console.log(divide(20, 5));  // Output: 4
  
  // 5. Important Notes
  // 5.1 Import Order: Imports always come before any other code in the file.
  // 5.2 File Extensions: When using imports, make sure you include the file extension (e.g., './file.js'), 
  // or use tools like Webpack or Babel to handle it for you in a React setup.
  
  // 6. Why Use ES6 Modules in React?
  // In React, you'll often work with components, which are essentially modules themselves. 
  // Using ES6 modules makes your React code clean and modular. You can export components from one file and import them in others.
  // React’s modular structure allows you to keep code separate for each component and feature, making your app easier to maintain.
  
  