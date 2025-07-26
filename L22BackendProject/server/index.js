// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Use environment port or default to 3000
const port = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());



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


// // ✅ Route to create a new user
// app.post('/users', async (req, res) => {
//     const { name, email, phone, password } = req.body;

//     // Basic validation
//     if (!name || !email || !phone || !password) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//         // Check if email already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(409).json({ error: 'Email already registered' });
//         }

//         const newUser = new User({ name, email, phone, password });
//         await newUser.save();

//         res.status(201).json(newUser);
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(400).json({ error: 'Internal server error' });
//     }
// });

// ✅ Start the server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
