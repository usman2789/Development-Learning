// 🔥 Type Casting in JavaScript 🔥

// Type casting (aka type conversion) is the process of converting one data type to another — like turning a string into a number or a number into a string.

//👉 Example:

Number("42"); // turns "42" (string) into 42 (number)


// ✅ String to Number
let num1 = Number("123");        // 123 (number)
let num2 = parseInt("123.45");  // 123 (int)
let num3 = parseFloat("123.45");// 123.45

// ✅ Number to String
let strs = String(123);          // "123"
let str2 = (123).toString();    // "123"


// ✅ Boolean to Number
Number(true);   // 1
Number(false);  // 0

// ✅ Number to Boolean
Boolean(1);     // true
Boolean(0);     // false


// ✅ String to Boolean
Boolean("Hello");  // true
Boolean("");       // false


// ✅ Implicit Conversion (auto type cast)

"5" + 2;         // "52" (string + number = string)
"5" - 2;         // 3   (string converted to number)
true + 1;        // 2   (true = 1)
false + "1";     // "false1" (boolean + string = string)


// ✅ Checking Type
typeof 123;        // "number"
typeof "abc";      // "string"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
typeof null;       // "object" (quirk)
typeof {};         // "object"
typeof [];         // "object"
typeof (() => {}); // "function"







