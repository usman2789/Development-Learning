// 🔥 JavaScript Exceptional Handling 🔥
// Helps us gracefully handle errors and avoid app crashes 🚫


// ✅ try...catch...finally
// Used to wrap code that might throw errors.

try {
    let result = riskyFunction(); // risky code
    console.log(result);
  } catch (error) {
    console.error("Something went wrong:", error.message); // handle error
  } finally {
    console.log("Always runs - cleanup etc."); // always runs
  }
  
  
  // ✅ throw Statement
  // Used to manually trigger an error.
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero"); // throwing custom error
    }
    return a / b;
  }
  
  try {
    divide(5, 0);
  } catch (err) {
    console.log(err.message); // Outputs: "Cannot divide by zero"
  }
  
  
  // ✅ Error Objects
  // Standard JS Error comes with properties like `name`, `message`, `stack`.
  
  try {
    throw new TypeError("Wrong type!");
  } catch (err) {
    console.log(err.name);    // "TypeError"
    console.log(err.message); // "Wrong type!"
    console.log(err.stack);   // Stack trace info
  }
  
  
  // 🧠 Common Error Types in JS:
  new Error("Generic Error");
  new TypeError("Wrong data type");
  new ReferenceError("Unknown variable");
  new SyntaxError("Code syntax issue");
  new RangeError("Number out of range");
  
  