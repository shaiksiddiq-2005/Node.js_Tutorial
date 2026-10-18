const {x} = require("./xyz.js"); 

const {Sum} = require("./calculate/sum.js");  

const {Multiply} = require("./calculate/Multiply.js");

let a= 10;
let b = 20;

console.log("Hi from app.js file");
console.log(x)

Sum(a,b);
Multiply(a,b);  


