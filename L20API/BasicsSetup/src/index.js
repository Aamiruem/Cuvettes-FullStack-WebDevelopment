const express = require('express');
const app = express();
require('./db/connection.js');
const port = process.env.PORT || 3000;

const mentor = require('./models/mentor');
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
