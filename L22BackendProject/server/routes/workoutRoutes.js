const express = require('express');
const workout = require('../models/workoutModel');
const router = express.Router();

//Require Controller
const { getWorkouts } = require('../controller/workoutController');

// Get all workouts and Get entire data
router.get('/', getWorkouts);


// Create a new workout
router.post('/', async (req, res) => {
    try {
        const workout = await workout.create(req.body);
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
