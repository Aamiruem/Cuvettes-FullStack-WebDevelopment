// const express = require("express");
// const { appendFile } = require("fs/promises");
// const path = require("path");
// const app = express();
// const port = process.env.PORT || 3000;

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.get("/", (req, res) => {
//     res.render("index")(
//         {
//             title: "Home Page" ,
//         content: "This is my home page"
//         })
// });

// app.get("/about", (req, res) => {
//     res.render("about", {
//         title: "About Page",
//         content: "This is my about page"
        
//     });
// })



// app.listen(port, () => {
//     console.log(`Your App Running and Listening on port ${port}`);
// });











const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home route
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
        content: "This is my home page"
    });
});

// About route
app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Page",
        content: "This is my about page"
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Your App is running and listening on port ${port}`);
});
