const fs = require('fs'); 
// const path = require('path');

// fs.writeFileSync("readme.txt", "Hello kamran bhai! and Afroz bhai");

// fs.appendFileSync("readme.txt", "  bye bhai");


// fs.readFileSync("readme.txt", "utf-8");


// const data = fs.readFileSync("readme.txt", "utf-8");
// const newData = data.toString().replace("bye bhai", "Bye bhai");
// console.log(data);



// fs.renameSync("readme.txt", "readwrite.txt");


// fs.unlinkSync("readwrite.txt");


// fs.rmdirSync("readwrite.txt");


// fs.writeFileSync("read.txt", "Hello kamran", (err) => {
//     console.log("File created");
//     console.log(err)
// });



// fs.appendFileSync("read.txt", "  bye bhai", (err) => {
//     console.log("Data updated");
//     console.log(err)
// });




fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data);
    console.log(err);
});
