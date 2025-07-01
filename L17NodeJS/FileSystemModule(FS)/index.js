const fs = require('fs'); 
// const path = require('path');

// fs.writeFileSync("readme.txt", "Hello kamran bhai! and Afroz bhai");

// fs.appendFileSync("readme.txt", "  bye bhai");


// fs.readFileSync("readme.txt", "utf-8");


const data = fs.readFileSync("readme.txt", "utf-8");
const newData = data.toString().replace("bye bhai", "Bye bhai");
console.log(data);
