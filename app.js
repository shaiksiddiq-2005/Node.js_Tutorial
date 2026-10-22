const {x} = require("./xyz.js"); 

const {Sum, Multiply} = require("./calculate"); // it simplifies the code by importing both Sum and Multiply functions from the index.js file in the calculate directory.

let a= 10;
let b = 20;

console.log("Hi from app.js file");
console.log(x)

Sum(a,b);
Multiply(a,b);  




setTimeout ( ()=>{
    console.log("Heyy from setTimeout");
},3000);


// THREAD POOL CONCEPT

process.env.UV_THREADPOOL_SIZE = 2; // This line sets the size of the thread pool used by libuv, which is the underlying library that Node.js uses for asynchronous I/O operations. By default, the thread pool size is 4, but here it is being set to 5.

const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) =>{
    console.log("1 - cryptotoPBKDF2 is DONE!");

});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) =>{
    console.log("2 - cryptotoPBKDF2 is DONE!");

});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) =>{
    console.log("3 - cryptotoPBKDF2 is DONE!");

});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) =>{
    console.log("4 - cryptotoPBKDF2 is DONE!");

});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) =>{
    console.log("5 - cryptotoPBKDF2 is DONE!");

});



