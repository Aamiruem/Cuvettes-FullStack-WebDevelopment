const express = require('express');
const app = express();
const http = require('http').createServer(app);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.get("/products", (req, res) => {
    res.send("<h1>Products Page</h1>");
});

app.get("/services", (req, res) => {
    res.send("<h1>Services Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>");
});

app.listen(port, () => {
    console.log(`Your App Running and Listening on port ${port}`);
});
