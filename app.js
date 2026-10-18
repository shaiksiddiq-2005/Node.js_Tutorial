// // This is Common JS module system. In this system we can export and import variables, functions, objects etc. from one file to another file.

// const {x} = require("./xyz.js"); // we are Importing the variable x from xyz.js file. Now we can access the variable x in app.js file.

// let a = 20;
// let b= 30;

// console.log(a+b)

// console.log(x) // we got an error x is not defined. because we cannot access the variable x from xyz.js file because it is not exported. To access the variable x we need to export it from xyz.js file and then import it in app.js file.





// There is an another technic for Exporting and Importing variables, functions, objects etc. from one file to another file. It is called ES6 module system. In this system we can export and import variables, functions, objects etc. from one file to another file using export and import keywords.
// ESM (ES module )

import {Sum} from "./xyz.js"; // we are Importing the variable x,y,z from xyz.js file. Now we can access the variable x,y,z in app.js file.
let a= 10;
let b = 20;
console.log("Hi from app.js file");


Sum(a,b);

