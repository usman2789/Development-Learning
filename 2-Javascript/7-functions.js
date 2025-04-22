// 🔥 JavaScript Functions Cheatsheet (With 1-liner Explanations) 🔥
// A function is a block of code that runs when called.

// ✅ 1. Function Declaration
// Traditional way to define functions (hoisted).
function greet(name) {
    return "Hello, " + name;
  }
  greet("Ali"); // Hello, Ali
  
  
  
  // ✅ 2. Function Expression
  // Assigned to a variable (not hoisted).
  const kahoHi = function(name) {
    return `Hi ${name}`;
  };
  sayHi("Sara"); // Hi Sara
  
  
  
  // ✅ 3. Arrow Function
  // Shorter syntax, no own `this` or `arguments`.
  const add = (a, b) => a + b;
  add(2, 3); // 5
  
  
  
  // ✅ 4. Anonymous Function
  // Function without a name, usually used as a callback.
  setTimeout(function () {
    console.log("Hello after 1s");
  }, 1000);
  
  
  
  // ✅ 5. Named Function Expression
  // Useful for recursion.
  const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
  };
  factorial(5); // 120
  
  
  
  
  // ✅ 6. IIFE (Immediately Invoked Function Expression)
  // Runs instantly without being called later.
  (function () {
    console.log("IIFE runs!");
  })(); // IIFE runs!
  
  
  
  // ✅ 7. Constructor Function
  // Used to create objects with `new` keyword.
  function Person(name) {
    this.name = name;
  }
  const users = new Person("Ali");
  console.log(users.name); // Ali
  
  
  
  // ✅ 8. Generator Function
  // Returns iterator, can pause execution with `yield`.
  function* counter() {
    yield 1;
    yield 2;
  }
  const gen = counter();
  console.log(gen.next().value); // 1
  
  
  
  
  // ✅ 9. Async Function
  // Always returns a Promise; used with `await`.
  async function fetchData() {
    const res = await fetch("/api");
    return res.json();
  }
  
  
  
  
  // ✅ 10. Callback Function
  // A function passed into another function.
  function process(callback) {
    callback("Done!");
  }
  process((msg) => console.log(msg)); // Done!
  
  
  
  
  // ✅ 11. Higher-Order Function
  // Takes functions as arguments or returns functions.
  function multiplier(factor) {
    return (x) => x * factor;
  }
  const double = multiplier(2);
  double(4); // 8
  
  
  
  
  // ✅ 12. Rest Parameters
  // Collects all remaining arguments into an array.
  function total(...nums) {
    return nums.reduce((a, b) => a + b, 0);
  }
  total(1, 2, 3); // 6
  
  
  
  
  // ✅ 13. Default Parameters
  // Use a fallback value if no argument is provided.
  function power(base, exp = 2) {
    return base ** exp;
  }
  power(3); // 9
  
  
  
  
  // ✅ 14. arguments object
  // Array-like object containing passed args (non-arrow only).
  function show() {
    return arguments[0];
  }
  show("first"); // "first"
  
  
  
  
  // ✅ 15. Function Scope
  // Variables declared inside a function are local.
  function testScope() {
    let x = 10;
    console.log(x); // 10
  }
  // console.log(x); // ❌ Error: x is not defined
  
  
  
  
  // ✅ 16. Function Hoisting
  // Declarations are hoisted, expressions are not.
  hoisted(); // Works!
  function hoisted() {
    console.log("I'm hoisted!");
  }
  
  
  
  // ✅ 17. this Keyword
  // Refers to the object calling the function.
  const objs = {
    name: "JS",
    print() {
      console.log(this.name);
    },
  };
  objs.print(); // JS
  
  
  
  
  // ✅ 18. Built-in Functions
  // Provided by JavaScript for use.
  parseInt("42");     // 42
  isNaN("abc");       // true
  typeof (() => {});  // "function"
  
  
  
  
  
  // ✅ 19. Function Stack & Execution Context
  // JS manages execution using stack; functions create a new context.
  function first() {
    second();
  }
  function second() {
    console.log("Second");
  }
  first(); // Second

  //reaming topics in function stack,scope---recursion,closures,lexical scoping
  
  
  
  
  
  
  
  
  
  
  
  