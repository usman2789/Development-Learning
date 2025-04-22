// 🔥 Expressions & Operators in JavaScript 🔥


// ✅ Expression (Definition)
// Any piece of code that resolves to a value

5 + 3;               // Expression → 8
"Hi";                // Expression → "Hi"
true && false;       // Expression → false


// ✅ Arithmetic Operators
console.log(5 + 2);  // 7 → addition
console.log(5 - 2);  // 3 → subtraction
console.log(5 * 2);  // 10 → multiplication
console.log(5 / 2);  // 2.5 → division
console.log(5 % 2);  // 1 → modulus (remainder)
console.log(2 ** 3); // 8 → exponentiation (power)
let xi = 1; 
xi++;                 // 2 → increment
xi--;                 // 1 → decrement


// ✅ Assignment Operators
let a = 5;           // assigns 5 to a
a += 2;              // 7 → same as a = a + 2
a -= 1;              // 6 → same as a = a - 1
a *= 2;              // 12
a /= 3;              // 4
a %= 3;              // 1
a **= 2;             // 1 → a = a^2


// ✅ Comparison Operators
console.log(5 == "5");   // true → loose equality (value only)
console.log(5 === "5");  // false → strict equality (value + type)
console.log(5 != "5");   // false → loose inequality
console.log(5 !== "5");  // true → strict inequality
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 4);     // false


// ✅ Logical Operators
console.log(true && false); // false → AND
console.log(true || false); // true → OR
console.log(!true);         // false → NOT


// ✅ String Operator
console.log("Usman" + " Khan"); // "Usman Khan" → string concatenation


// ✅ Type Operators
console.log(typeof 123);         // "number"
console.log(typeof "abc");       // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (JS quirk)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof (() => {}));  // "function"

let arra = [];
console.log(arra instanceof Array); // true → checks if instance of Array




// ✅ Unary Operators (work with a single operand)
let xo = 5;
console.log(-x0);         // -5 → negation
console.log(+true);      // 1  → converts to number
console.log(!false);     // true → logical NOT
console.log(typeof "Hi");// "string" → type check
console.log(void 0);     // undefined → returns undefined


// ✅ Comma Operator (evaluates multiple expressions, returns last)
let as = (1, 2, 3);
console.log(as);          // 3 → last value is assigned
let b = (console.log("A"), console.log("B")); // logs A, then B


// ✅ Bitwise Operators (low-level binary operations)
console.log(5 & 1);      // 1 → AND (0101 & 0001)
console.log(5 | 1);      // 5 → OR  (0101 | 0001)
console.log(5 ^ 1);      // 4 → XOR (0101 ^ 0001)
console.log(~5);         // -6 → NOT (inverts bits)
console.log(5 << 1);     // 10 → left shift (adds a 0 on right)
console.log(5 >> 1);     // 2 → right shift (removes rightmost bit)
console.log(-5 >>> 1);   // big number → unsigned right shift


// ✅ BigInt Operators (for working with large integers)
let big1 = 12345678901234567890n;
let big2 = 10000000000000000000n;
console.log(big1 + big2); // 22345678901234567890n → addition
console.log(big1 * 2n);   // 24691357802469135780n
console.log(big1 > big2); // true → comparisons work
// ❌ Cannot mix BigInt with regular numbers directly
// big1 + 1; → Error









