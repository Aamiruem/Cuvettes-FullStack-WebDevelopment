const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Middleware Configuration
 */

// Request Logger Middleware
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const { method, originalUrl } = req;

    console.log(`[${timestamp}] ${method} ${originalUrl}`);
    next();
};

// Apply Middleware
app.use(requestLogger);
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing form data

/**
 * Route Handlers
 */

const homeHandler = (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home Page</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 20px;
          color: #333;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
        }
        h1 {
          color: #2c3e50;
        }
        nav {
          margin: 20px 0;
        }
        a {
          color: #3498db;
          text-decoration: none;
          margin-right: 15px;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to the Home Page</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
        <p>This is the main page of our Express application.</p>
      </div>
    </body>
    </html>
  `);
};

const aboutHandler = (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About Page</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 20px;
          color: #333;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
        }
        h1 {
          color: #2c3e50;
        }
        nav {
          margin: 20px 0;
        }
        a {
          color: #3498db;
          text-decoration: none;
          margin-right: 15px;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>About Us</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
        <p>This application demonstrates clean Express.js routing and middleware implementation.</p>
      </div>
    </body>
    </html>
  `);
};

/**
 * Route Definitions
 */
app.get('/', homeHandler);
app.get('/about', aboutHandler);

/**
 * Error Handling
 */

// 404 Handler
app.use((req, res) => {
    res.status(404).send(`
    <div class="container">
      <h1>404 - Not Found</h1>
      <p>The page you requested doesn't exist.</p>
      <a href="/">Return to Home</a>
    </div>
  `);
});

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`
    <div class="container">
      <h1>500 - Server Error</h1>
      <p>Something went wrong on our end.</p>
      <a href="/">Return to Home</a>
    </div>
  `);
});

/**
 * Server Initialization
 */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access the application at http://localhost:${PORT}`);
});
