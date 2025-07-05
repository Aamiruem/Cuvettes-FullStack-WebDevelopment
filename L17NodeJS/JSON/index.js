// const fs = require('fs');

// const data = {
//     name: "kamran",
//     age: 23,
//     address: {
//         street: "Nautanwa West champaran Bihar",
//         city: "Narkatia Ganj",
//         state: "Bihar"
//     }
// }
// // console.log(JSON.stringify(data));

// const jsonData = JSON.stringify(data);
// // console.log(jsonData);

// fs.writeFile("data.join", JSON.stringify(data), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File created");
//     }
// });





// const fs = require('fs');

// const data = {
//     name: "kamran",
//     age: 23,
//     address: {
//         street: "Nautanwa West champaran Bihar",
//         city: "Narkatia Ganj",
//         state: "Bihar"
//     }
// };

// // Convert to JSON with proper formatting (2 space indentation)
// const jsonData = JSON.stringify(data, null, 2);

// // Write to file with proper error handling
// fs.writeFile("data.json", jsonData, (err) => {
//     if (err) {
//         console.error("Error writing file:", err);
//     } else {
//         console.log("File created successfully");
//         console.log("Data written to data.json:");
//         console.log(jsonData);
//     }
// });







const fs = require('fs');

const data = {
    name: "kamran",
    age: 23,
    address: {
        street: "Nautanwa West champaran Bihar",
        city: "Narkatia Ganj",
        state: "Bihar"
    }
};


const JSONData = JSON.stringify(data);


fs.writeFile("data.json", JSONData, () => {
    console.log("File created successfully");
    // console.log("Data written to data.json:");
    // console.log(jsonData);
});

fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        const parsedData = JSON.parse(data);
        console.log("Data read from data.json:");
        console.log(parsedData);
    }
});
