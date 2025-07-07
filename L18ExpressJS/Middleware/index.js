const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;


const auth = (req, res, next) => {
    res.send("<h1>our auth middleware</h1>");
    console.log("Authenticating...");
    next();
};
app.use(auth);

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

app.use((req, res) => {
    res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 Not Found</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div class="container">
        <h1>404 - Not Found</h1>
        <p>The requested URL ${req.url} was not found on this server.</p>
        <a href="/">Go back home</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log(`Your App Running and Listening on port ${port}`);
});
