// =====================
// 📦 EVENTS IN JAVASCRIPT
// =====================

// ✅ Basic Event Listener
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('Button clicked!');
});

// ✅ Common Event Types
// click – user clicks on an element
// input – input field changes
// keydown – when key is pressed
// keyup – when key is released
// submit – form is submitted
// change – input loses focus after change
// mousemove – mouse moves on screen

// ✅ Input Field Example
const input = document.querySelector('#name');
input.addEventListener('input', (e) => {
  console.log('Typed:', e.target.value);
});

// ✅ preventDefault – stops default behavior (like form submitting)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submission stopped!');
});

// ✅ stopPropagation – stops bubbling to parent
const child = document.querySelector('.child');
child.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child clicked only!');
});

// ✅ Event Bubbling vs Capturing


// Default is bubbling (child ➝ parent)
// Use { capture: true } for capturing (parent ➝ child)
document.querySelector('.box').addEventListener('click', () => {
  console.log('Box clicked during bubbling');
});

document.querySelector('.box').addEventListener('click', () => {
  console.log('Box clicked during capturing');
}, true);

// ✅ One-Time Event
btn.addEventListener('click', () => {
  console.log('Runs only once!');
}, { once: true });
