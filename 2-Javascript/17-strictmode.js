//🔐 Strict Mode – Keep JavaScript Clean
//Strict mode helps you write more secure and predictable code by throwing errors for bad practices.



// ✅ 1. Enable Strict Mode
"use strict"; // Must be at the top of file or function

// ✅ 2. Disallows undeclared variables
x = 10; // ❌ ReferenceError in strict mode

// ✅ 3. Prevents deleting variables/functions
//delete Object; // ❌ Error

// ✅ 4. Makes assignments to read-only properties throw errors
const objr = {};
Object.defineProperty(objr, "name", { value: "JS", writable: false });
objr.name = "Python"; // ❌ TypeError

// ✅ 5. Disallows duplicate parameter names
function sum(a, a) {} // ❌ Error in strict

// ✅ 6. Safer `this` in functions
function f() {
  "use strict";
  console.log(this); // undefined instead of window
}

// ✅ 7. Prevents setting properties on primitives
false.true = "no"; // ❌ Error in strict

// ✅ 8. Restricted future features
// Helps JavaScript prepare for new reserved words and syntax