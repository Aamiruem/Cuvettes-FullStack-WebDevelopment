const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;


// Middleware to log every request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Define routes
router.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

router.get('/about', (req, res) => {
    res.send('');
});

// Use router directly (no prefix)
app.use('/', router);

// Start server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
