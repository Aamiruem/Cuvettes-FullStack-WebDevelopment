const express = require('express');
const workout = require('../models/workoutModel');
const router = express.Router();

//Require Controller
const { getWorkouts, getWorkout, createWorkout, updateWorkout, deleteWorkout } = require('../controllers/workoutController');

// Get all workouts and Get entire data
router.get('/', getWorkouts);

// Get a single workout by ID
router.get('/:id', getWorkout);

//create record 
router.post('/', createWorkout);

//Update a workout 
router.patch('/:id', updateWorkout);

// Delete a workout 
router.delete('/:id', deleteWorkout); // Uncomment when deleteWorkout is implemented

module.exports = router;
