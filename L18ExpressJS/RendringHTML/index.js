// const express = require("express");
// const path = require("path");
// const app = express();
// const port = process.env.PORT || 3000;



// app.use(express.static("public"));
// app.use(express.static("views"));
// // app.use(express.static("node_modules"));
// // app.use(express.static("node_modules/bootstrap/dist/css"));


// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });



// app.listen(port, () => {
//     console.log(`Your App Running and Listening on port ${port}`);
// });













const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Serve static files like HTML from "views" if needed
app.use(express.static(path.join(__dirname, "views")));

// Route for the home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Your App is running and listening on port ${port}`);
});
