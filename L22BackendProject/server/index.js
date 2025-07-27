// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Use environment port or default to 3000
const port = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

app.use(cors());


//db connection
require("./db/connection");

//Require Routes
const workoutRoutes = require('./routes/workoutRoutes');

//Middleware for routes
app.use('/api/workouts', workoutRoutes);


// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the User Management API');
});



app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
