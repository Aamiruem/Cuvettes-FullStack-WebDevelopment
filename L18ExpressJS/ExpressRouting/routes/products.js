const express = require('express');
const router = express.Router();

router.get("/products", (req, res) => {
    res.send("<h1>Products Page</h1>");
});


router.get("/page1", (req, res) => {
    res.send("<h1>Products one Page1</h1>");
});

router.get("/page2", (req, res) => {
    res.send("<h1>Products one Page2</h1>");
});


router.get("/page3", (req, res) => {
    res.send("<h1>Products one Page3</h1>");
});


router.get("/page4", (req, res) => {
    res.send("<h1>Products one Page4</h1>");
});


router.get("/page5", (req, res) => {
    res.send("<h1>Products one Page5</h1>");
});



router.get("/services", (req, res) => {
    res.send("<h1>Services Page</h1>");
});

module.exports = router;
