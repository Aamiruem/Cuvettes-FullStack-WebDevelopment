const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Data sent from server!");
});


app.get("/home", (req, res) => {
    res.send("<h1>Home Page</h1>");
});


app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.listen(port, () => {
    console.log(`Your App Running and Listening on port ${port}`);
});
