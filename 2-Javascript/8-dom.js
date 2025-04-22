//📦 DOM APIs – Talk to the HTML
//DOM (Document Object Model) APIs let JavaScript interact with the structure and content of your web page.


// ✅ 1. Selecting Elements
document.getElementById("id");           // Select by ID
document.querySelector(".class");        // First match by selector
document.querySelectorAll("p");          // NodeList of <p> tags

// ✅ 2. Changing Content
document.getElementById("box").innerText = "Hello";
document.getElementById("box").innerHTML = "<b>Hello</b>";

// ✅ 3. Changing Attributes
element.setAttribute("src", "img.jpg");
element.getAttribute("href");
element.removeAttribute("disabled");

// ✅ 4. Changing Styles
element.style.color = "red";
element.style.backgroundColor = "#000";

// ✅ 5. Adding/Removing Classes
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("show");

// ✅ 6. Creating & Inserting Elements
const div = document.createElement("div");
div.innerText = "I’m new!";
document.body.appendChild(div);
document.body.insertBefore(div, someOtherElement);

// ✅ 7. Removing Elements
element.remove();                         // Remove itself
parent.removeChild(child);                // Traditional way

// ✅ 8. Event Handling
element.addEventListener("click", () => {
  alert("Clicked!");
});

// ✅ 9. Form Handling
const val = document.querySelector("#input").value;
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop reload
  console.log("Form submitted");
});

// ✅ 10. Traversing Nodes
element.parentElement;
element.children;
element.nextElementSibling;
element.previousElementSibling;

// ✅ 11. Window & Document APIs
window.location.href;         // Get current URL
window.scrollTo(0, 0);         // Scroll to top
document.title = "New Title"; // Change title




