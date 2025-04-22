
// -------------------------------------------
//  ✅ What are variabes?
// Variables are containers for storing data values.
// They can hold different types of data and can be changed during program execution.
// Variables are declared using keywords like var, let, and const.
// They can be assigned values and used in expressions and calculations.
// Variables are essential for managing and manipulating data in JavaScript programs.
// They can be used to store user input, results of calculations, or any other data needed in the program.
// Variables can be declared with different scopes, such as global or local, affecting their accessibility within the code.

//Declaration: Creating a variable (e.g., var myVar;) or function name.

//Initialization: Assigning a value to a variable (e.g., myVar = 10;)




// -------------------------------------------
// 🔸 var (Old - avoid)
// ✅ Function-scoped
// ✅ Can be redeclared and updated
// ❌ Not block-scoped (can lead to bugs)

var name = "usman";
var name = "ali"; // No error — bad for scalable code


// -------------------------------------------
// 🔸 let (Modern)
// ✅ Block-scoped
// ✅ Can be updated
// ❌ Cannot be redeclared in same scope

let counter = 0;
counter = counter + 1;


// -------------------------------------------
// 🔸 const (Modern)
// ✅ Block-scoped
// ❌ Cannot be updated or redeclared
// ✅ Must be initialized

const apiUrl = "https://example.com";
// apiUrl = "new url"; ❌ Error


// -------------------------------------------
// ✅ Best Practice in Scalable Projects:
// 👉 Use const by default
// 👉 Use let only if value changes
// ❌ Avoid var completely

const MAX_SCORE = 100;
let currentScore = 0;

function addScore(points) {
  currentScore += points;
}


// -------------------------------------------
// 🔹 Variable Naming Rules
// ✅ Can contain letters, digits, $, _
// ✅ Cannot start with a number
// ✅ Case-sensitive
// ✅ Avoid JS reserved keywords

let userName = "usman";  // ✅ Valid
let $token = "abc";      // ✅ Valid
let _private = true;     // ✅ Valid
// let 1user = "no";     // ❌ Invalid
// let let = "no";       // ❌ Invalid



// -------------------------------------------
// 🔹 Hoisting
//In JavaScript, hoisting is like JavaScript's way of moving all declarations to the top of their scope 
// before code execution.  This means you can use a variable or function before it's actually declared in
//  your code.  However, only the declaration is hoisted, not the initialization.


// Example of hoisting with variables
console.log(myVar); // Outputs: undefined (not an error)
var myVar = 10;     // Declaration AND initialization

// Example of hoisting with functions
myFunction();       // Outputs: "Hello!"
function myFunction() {
  console.log("Hello!");
}



