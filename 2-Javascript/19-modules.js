// 🔥 JavaScript Modules Cheatsheet 🔥


// ✅ What are Modules?
// ➤ Modules help organize code into reusable, maintainable chunks.
// ➤ Scope is local to the module, avoiding global namespace pollution.


// ✅ Types of Modules
// ----------------------

// 1️⃣ ES Modules (ESM)
// ➤ Modern standard, works in browsers (with type="module") & Node.js (with "type": "module" in package.json)
export const greet = () => console.log("Hello!");

import { greet } from './greet.js';


// ➕ Default Export (Only one per file)
export default function () { console.log("Default"); }

import anyName from './file.js';


// 2️⃣ CommonJS (CJS) — Node.js default before ESM
// ➤ Used with require/module.exports
// ➤ Does not work natively in browsers

// Export
module.exports = {
  greet: () => console.log("Hey from CommonJS")
};

// Import
const { greet } = require('./greet');


// ✅ Key Differences
// --------------------
// ✅ ESM: Static imports (at top), supports tree-shaking
// ✅ CJS: Dynamic imports, works synchronously (good for Node.js)

// ✅ ESM is recommended for modern apps and frontend development


// ✅ Dynamic Import (ESM Only)
const module = await import('./math.js');  // returns a promise


// ✅ Import Everything
import * as utils from './utils.js';
utils.sayHi();


// ✅ Named + Default Together
export const x = 10;
export default function main() {}

import main, { x } from './file.js';


// ✅ Browser usage:
// <script type="module" src="main.js"></script>


// ✅ Node.js Setup for ESM:
// Add this in package.json
// "type": "module"
