// const express = require('express');
// const workout = require('../models/workoutModel');
// const router = express.Router();

// const authUser = require('../middleware/userMiddleware');

// //Require Controller
// const { getWorkouts, getWorkout, createWorkout, updateWorkout, deleteWorkout } = require('../controllers/workoutController');


// // Middleware
// router.use(authUser);

// // Get all workouts and Get entire data
// router.get('/', getWorkouts);

// // Get a single workout by ID
// router.get('/:id', getWorkout);

// //create record
// router.post('/', createWorkout);

// //Update a workout
// router.patch('/:id', updateWorkout);

// // Delete a workout
// router.delete('/:id', deleteWorkout); // Uncomment when deleteWorkout is implemented

// module.exports = router;









// const express = require('express');
// const router = express.Router();

// const { authUser } = require('../middleware/userMiddleware');

// const {
//     getWorkouts,
//     getWorkout,
//     createWorkout,
//     updateWorkout,
//     deleteWorkout
// } = require('../controllers/workoutController');

// router.use(authUser);

// router.get('/', getWorkouts);
// router.get('/:id', getWorkout);
// router.post('/', createWorkout);
// router.patch('/:id', updateWorkout);
// router.delete('/:id', deleteWorkout);

// module.exports = router;













const express = require('express');
const router = express.Router();

// Middleware
const { authUser } = require('../middleware/userMiddleware'); // ✅ Destructure properly

// Controllers
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController');

// Apply auth middleware to all workout routes
router.use(authUser); // ✅ Protects all routes below

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// PATCH (update) a workout
router.patch('/:id', updateWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

module.exports = router;

