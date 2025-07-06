// const express = require('express');
// const app = express();



// app.get('/get', (req, res) => {

//     res.send('GET request');

// });



// app.post('/post', (req, res) => {

//     res.send('POST request');

// });



// app.put('/put', (req, res) => {

//     res.send('PUT request');

// });



// app.delete('/delete', (req, res) => {

//     res.send('DELETE request');

// });



// app.listen(3000, () => {

//     console.log('Server listening on port 3000');

// });







const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (including CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Custom middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// Home route - using sendFile to serve an HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET route
app.get('/api/data', (req, res) => {
    res.json({
        success: true,
        message: 'GET request successful',
        data: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' }
        ],
        timestamp: new Date().toISOString()
    });
});

// POST route
app.post('/api/data', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Name is required'
        });
    }

    res.status(201).json({
        success: true,
        message: 'Item created successfully',
        data: {
            id: Date.now(),
            name
        }
    });
});

// PUT route
app.put('/api/data/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Name is required for update'
        });
    }

    res.json({
        success: true,
        message: 'Item updated successfully',
        data: {
            id,
            name
        }
    });
});

// DELETE route
app.delete('/api/data/:id', (req, res) => {
    const { id } = req.params;

    res.json({
        success: true,
        message: `Item with ID ${id} deleted successfully`
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
