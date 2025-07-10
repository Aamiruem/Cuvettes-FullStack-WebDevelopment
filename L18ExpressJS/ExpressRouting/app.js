const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);

const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Set view engine (if you want to use templates later)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Custom middleware example
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Enhanced routes with proper HTML structure and styling
const sendStyledPage = (res, title, content) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title} | My Express App</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
          background-color: #f5f5f5;
          color: #333;
          line-height: 1.6;
        }
        header {
          background: #2c3e50;
          color: white;
          padding: 1rem 0;
          text-align: center;
        }
        nav {
          background: #34495e;
          padding: 0.5rem;
        }
        nav ul {
          display: flex;
          justify-content: center;
          list-style: none;
        }
        nav ul li {
          margin: 0 1rem;
        }
        nav ul li a {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: background 0.3s;
        }
        nav ul li a:hover {
          background: #2c3e50;
        }
        .container {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        h1 {
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        footer {
          background: #2c3e50;
          color: white;
          text-align: center;
          padding: 1rem 0;
          position: fixed;
          bottom: 0;
          width: 100%;
        }
        .active {
          background: #2c3e50;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>My Express App</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/" class="${title === 'Home' ? 'active' : ''}">Home</a></li>
          <li><a href="/about" class="${title === 'About' ? 'active' : ''}">About</a></li>
          <li><a href="/products" class="${title === 'Products' ? 'active' : ''}">Products</a></li>
          <li><a href="/services" class="${title === 'Services' ? 'active' : ''}">Services</a></li>
          <li><a href="/contact" class="${title === 'Contact' ? 'active' : ''}">Contact</a></li>
        </ul>
      </nav>
      <div class="container">
        ${content}
      </div>
      <footer>
        <p>&copy; ${new Date().getFullYear()} My Express App. All rights reserved.</p>
      </footer>
    </body>
    </html>
  `);
};

// Routes
app.get("/", (req, res) => {
    sendStyledPage(res, 'Home', `
    <h1>Welcome to Our Website</h1>
    <p>This is the home page of our amazing Express.js application.</p>
  `);
});

app.get("/about", (req, res) => {
    sendStyledPage(res, 'About', `
    <h1>About Us</h1>
    <p>We are a company dedicated to creating awesome web applications using Node.js and Express.</p>
    <p>Our team consists of experienced developers who love what they do.</p>
  `);
});

app.get("/products", (req, res) => {
    sendStyledPage(res, 'Products', `
    <h1>Our Products</h1>
    <ul>
      <li>Product 1 - Description</li>
      <li>Product 2 - Description</li>
      <li>Product 3 - Description</li>
    </ul>
  `);
});

app.get("/services", (req, res) => {
    sendStyledPage(res, 'Services', `
    <h1>Our Services</h1>
    <p>We offer a wide range of services to meet your needs:</p>
    <ul>
      <li>Web Development</li>
      <li>API Design</li>
      <li>Consulting</li>
      <li>Training</li>
    </ul>
  `);
});

app.get("/contact", (req, res) => {
    sendStyledPage(res, 'Contact', `
    <h1>Contact Us</h1>
    <form action="/contact" method="POST" style="max-width: 500px; margin: 0 auto;">
      <div style="margin-bottom: 1rem;">
        <label for="name" style="display: block; margin-bottom: 0.5rem;">Name:</label>
        <input type="text" id="name" name="name" required style="width: 100%; padding: 0.5rem;">
      </div>
      <div style="margin-bottom: 1rem;">
        <label for="email" style="display: block; margin-bottom: 0.5rem;">Email:</label>
        <input type="email" id="email" name="email" required style="width: 100%; padding: 0.5rem;">
      </div>
      <div style="margin-bottom: 1rem;">
        <label for="message" style="display: block; margin-bottom: 0.5rem;">Message:</label>
        <textarea id="message" name="message" required style="width: 100%; padding: 0.5rem; min-height: 150px;"></textarea>
      </div>
      <button type="submit" style="background: #2c3e50; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; cursor: pointer;">Send Message</button>
    </form>
  `);
});

app.post("/contact", (req, res) => {
    // In a real app, you would process the form data here
    console.log('Form submission:', req.body);
    sendStyledPage(res, 'Contact', `
    <h1>Thank You!</h1>
    <p>We have received your message and will get back to you soon.</p>
    <a href="/" style="color: #2c3e50; text-decoration: none;">← Back to Home</a>
  `);
});

// 404 handler
app.use((req, res) => {
    sendStyledPage(res, '404', `
    <h1>Page Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
    <a href="/" style="color: #2c3e50; text-decoration: none;">← Back to Home</a>
  `);
    res.status(404);
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    sendStyledPage(res, 'Error', `
    <h1>Something Went Wrong</h1>
    <p>We're experiencing some technical difficulties. Please try again later.</p>
    <a href="/" style="color: #2c3e50; text-decoration: none;">← Back to Home</a>
  `);
    res.status(500);
});

// Start server
http.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Visit http://localhost:${port}`);
});
