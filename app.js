const {x} = require("./xyz.js"); 

const {Sum, Multiply} = require("./calculate"); // it simplifies the code by importing both Sum and Multiply functions from the index.js file in the calculate directory.

let a= 10;
let b = 20;

console.log("Hi from app.js file");
console.log(x)

Sum(a,b);
Multiply(a,b);  


