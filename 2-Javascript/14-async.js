// 🔁 Asynchronous JavaScript Cheatsheet

// 🔹 What is Async JS?
// It allows non-blocking code execution, enabling operations (like fetching data) to run in background.

// 🔸 Synchronous vs Asynchronous
console.log("Start");
setTimeout(() => console.log("Async Task"), 1000);
console.log("End"); // 👉 "Start", "End", "Async Task"



// 🔹 setTimeout & setInterval
setTimeout(() => console.log("1 second later"), 1000);
setInterval(() => console.log("Runs every 2s"), 2000);




// 🔹 Callback Function
function loadData(cb) {
  setTimeout(() => {
    cb("Data loaded");
  }, 1000);
}
loadData(console.log); // 👉 "Data loaded"




// 🔹 Callback Hell
doA(() => {
  doB(() => {
    doC(() => {
      console.log("Nested chaos 😵");
    });
  });
});




// 🔹 Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});
promise.then(console.log); // 👉 "Success!"




// 🔹 .then(), .catch(), .finally()
promise
  .then(data => console.log(data))      // 👉 "Success!"
  .catch(err => console.error(err))     // 👉 error (if any)
  .finally(() => console.log("Done"));  // 👉 always runs




// 🔹 Promise Chaining
fetchData()
  .then(data => process(data))
  .then(result => display(result))
  .catch(err => handle(err));




// 🔹 Async/Await
async function fetchUser() {
  try {
    const res = await fetch("https://api.com/user");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}
fetchUser();




// 🔹 Parallel vs Sequential
// Sequential
await doA();
await doB();


// Parallel
await Promise.all([doA(), doB()]);




// 🔹 Promise.all, race, any, allSettled
Promise.all([p1, p2]);       // all must succeed
Promise.race([p1, p2]);      // first to settle
Promise.any([p1, p2]);       // first to resolve (ignore rejects)
Promise.allSettled([p1, p2]); // waits for all, gives result/status




// 🔹 Microtask Queue vs Macrotask Queue
// Microtasks: .then(), queueMicrotask()
// Macrotasks: setTimeout, setInterval
console.log("1");
setTimeout(() => console.log("3"), 0);
Promise.resolve().then(() => console.log("2"));
// 👉 Output: 1, 2, 3




// 🔹 Event Loop (basic)
// JS uses an event loop to manage sync/async code,
// pulling async tasks (timers, promises) into the main thread when ready.
