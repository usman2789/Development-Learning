// 1. What is the Ternary Operator?
// The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value if true, and a value if false.
// It is commonly used for simple conditional assignments or expressions in JavaScript.

// Real-World Analogy:
// Think of the ternary operator as a decision-making process where you ask a question (the condition), 
// and based on the answer (true or false), you take one of two actions (returning one of two values).

// Syntax:
const result = condition ? valueIfTrue : valueIfFalse;

// 2. Basic Example of the Ternary Operator
const ag = 18;
const message = ag >= 18 ? "You are an adult" : "You are a minor";
console.log(message); // Output: "You are an adult"

// 3. Using the Ternary Operator for Assignment
// You can use the ternary operator to assign values based on conditions.

const isLoggedIn = true;
const userStatus = isLoggedIn ? "Logged In" : "Logged Out";
console.log(userStatus); // Output: "Logged In"

// 4. Nested Ternary Operator
// You can nest ternary operators inside one another for more complex conditions, though it may reduce readability.

const age = 25;
const category = age < 18 ? "Child" : age < 60 ? "Adult" : "Senior";
console.log(category); // Output: "Adult"

// 5. Ternary Operator in JSX (React Example)
// In React, you can use the ternary operator inside JSX to conditionally render elements or components.

const isDarkMode = true;

return (
  <div>
    {isDarkMode ? <p>Dark mode is on!</p> : <p>Dark mode is off!</p>}
  </div>
);

// If `isDarkMode` is true, the first <p> tag will render, otherwise, the second <p> tag will render.


// 6. Avoiding Overuse of Ternary Operators
// While the ternary operator is concise, overusing it or nesting multiple ternaries can make the code harder to read.
// It's important to maintain balance and readability, especially in more complex conditions.

const userRole = "admin";
const access = userRole === "admin" ? "Full access" : userRole === "user" ? "Limited access" : "No access";
console.log(access); // Output: "Full access"

// 7. Summary of the Ternary Operator
// - A ternary operator is a concise way to perform conditional logic.
// - It takes three parts: the condition, the true value, and the false value.
// - It's often used in simple conditions or within JSX for conditional rendering.
// - Avoid using nested ternary operators excessively, as it can reduce readability.

