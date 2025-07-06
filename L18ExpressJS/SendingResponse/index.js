const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("Data sent from server!");
// });


// app.get("/home", (req, res) => {
//     res.send("<h1>Home Page</h1>");
// });


// app.get("/about", (req, res) => {
//     res.send("<h1>About Page</h1>");
// });


app.get("/", (req, res) => {
    // res.status(200).send(" 404 Not Found");
    // res.json({ message: "404 Not Found" });
    // res.status(200).json({ message: "Data sent from server!" });
    // res.sendFile(path.join(__dirname, "/index.html"));
    
    res.sendFile(path.resolve(__dirname) + "/index.html");
    // res.download(path.resolve(__dirname) + "/index.html");

});



app.listen(port, () => {
    console.log(`Your App Running and Listening on port ${port}`);
});
