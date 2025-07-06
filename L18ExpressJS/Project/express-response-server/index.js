const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (including CSS)
app.use(express.static('public'));

// Custom middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// Home route
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Express Response Server</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div class="container">
        <h1>Welcome to the Express Response Server</h1>
        <p>Try these endpoints:</p>
        <ul>
          <li><strong>GET</strong> /api/data</li>
          <li><strong>POST</strong> /api/data</li>
          <li><strong>PUT</strong> /api/data/:id</li>
          <li><strong>DELETE</strong> /api/data/:id</li>
        </ul>
      </div>
    </body>
    </html>
  `);
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
    res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 Not Found</title>
      <link rel="stylesheet" href="/styles.css">
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
