const express = require('express');
const router = require("./routes/products");
const app = express();
const http = require('http').createServer(app);
// const router = express.Router();

const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});


app.use("/", router);

app.listen(port, () => {
    console.log(`Your App Running and Listening on port ${port}`);
});
