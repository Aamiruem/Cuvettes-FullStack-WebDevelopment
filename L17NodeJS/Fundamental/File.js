
const { sum } = require('./index'); // Destructuring to get the 'sum' function
sum(2, 3);


//another way to find 
const index = require('./index');
index.sum(2, 3);


const add = require('./index');
add.sum(20, 30);



const data = require('./index');
data.sum(78, 90);
console.log(data.number);


// //not required data after destructuring
// const { sum, number } = require('./index');
// sum(2, 3);
// console.log(number);

//wrong
// const { sum, number } = require('./index');

// sum(2, 3);              // Output: 5
// console.log(number);    // Output: 100



const { sum: importedSum, number } = require('./index');

importedSum(2, 3);
console.log(number);
