// 🔁 Working with APIs (JavaScript Cheatsheet)

// 🔹 What is an API?
// API = Application Programming Interface; allows communication between frontend & backend (or 2 systems)

// 🔹 HTTP Methods (REST APIs)
GET     // fetch data
POST    // send/create data
PUT     // update/replace data
PATCH   // partial update
DELETE  // remove data

// 🔹 Using Fetch API
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// 🔹 Fetch with POST + Headers
fetch('https://api.example.com/post', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Dev Bro", age: 18 })
})
  .then(res => res.json())
  .then(data => console.log(data));

// 🔹 Fetch with Async/Await
async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
getData();

// 🔹 Handling HTTP Status Codes
fetch('/api')
  .then(res => {
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Request failed:", err));

// 🔹 Custom Headers & Tokens
fetch('/secure-api', {
  headers: {
    Authorization: 'Bearer YOUR_ACCESS_TOKEN'
  }
});

// 🔹 Query Parameters (GET)
fetch('https://api.com/users?limit=10&sort=name')
  .then(res => res.json())
  .then(console.log);

// 🔹 JSON Placeholder (Testing API)
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(console.log);

// 🔹 Uploading Files (FormData)
const form = new FormData();
form.append('file', fileInput.files[0]);
fetch('/upload', {
  method: 'POST',
  body: form
})
  .then(res => res.json())
  .then(console.log);

// 🔹 Abort Request (Cancel fetch)
const controller = new AbortController();
fetch('/slow-api', { signal: controller.signal });
controller.abort(); // stops request

// 🔹 Chaining APIs (Sequential)
fetch('/api/user')
  .then(res => res.json())
  .then(user => fetch(`/api/profile/${user.id}`))
  .then(res => res.json())
  .then(profile => console.log(profile));

// 🔹 Parallel API Calls
Promise.all([
  fetch('/api/score').then(r => r.json()),
  fetch('/api/rank').then(r => r.json())
]).then(([score, rank]) => {
  console.log("Score:", score, "Rank:", rank);
});

// 🔹 Error Handling Patterns
try {
  const res = await fetch('/bad-url');
  if (!res.ok) throw new Error('Something broke');
  const data = await res.json();
} catch (e) {
  console.error("API Error:", e.message);
}

// 🔸 BONUS: XMLHttpRequest (Old School)
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Response:", JSON.parse(xhr.responseText));
  } else {
    console.error("Request failed:", xhr.status);
  }
};
xhr.onerror = function () {
  console.error("Network error");
};
xhr.send();
