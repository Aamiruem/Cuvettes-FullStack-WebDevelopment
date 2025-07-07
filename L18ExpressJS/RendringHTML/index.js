const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;



app.use(express.static("public"));
app.use(express.static("views"));

// app.use(express.static("node_modules"));
// app.use(express.static("node_modules/bootstrap/dist/css"));


// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });



app.listen(port, () => {
    console.log(`Your App Running and Listening on port ${port}`);
});
