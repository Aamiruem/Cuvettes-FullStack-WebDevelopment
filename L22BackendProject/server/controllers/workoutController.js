// const workout = require('../models/workoutModel');

// //Get All Data
// const getWorkouts = async (req, res) => {
//     try {
//         const workoutData = await workout.find({ user_id}).sort({ createdAt: -1 });

//         if (!workoutData || workoutData.length === 0) {
//             return res.status(404).json({ message: 'No workouts found' });
//         }

//         res.status(200).json(workoutData);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// // Get a single workout by ID
// const getWorkout = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const workoutData = await workout.findById({_id: id});

//         if (!workoutData) {
//             return res.status(404).json({ message: 'Workout not found' });
//         }

//         res.status(200).json(workoutData);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// // Create a new workout
// const createWorkout = async (req, res) => {
//     const { title, reps, load } = req.body;
//     const user_id = req.user._id;
//     try {
//         const newWorkout = new workout({title, reps, load, user_id});
//         await newWorkout.save();
//         //or alternatively, you can use
//         // const workout = await newWorkout.save();
//         if (!newWorkout) {
//             return res.status(400).json({ message: 'Failed to create workout' });
//         }
//         res.status(201).json(newWorkout);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// // Update a workout
// const updateWorkout = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedWorkout = await workout.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        
//         if (!updatedWorkout) {
//             return res.status(404).json({ message: 'Workout not found' });
//         }
//         res.status(200).json(updatedWorkout);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// //delete a workout
// const deleteWorkout = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const deletedWorkout = await workout.findByIdAndDelete(id);
//         if (!deletedWorkout) {
//             return res.status(404).json({ message: 'Workout not found' });
//         }
//         res.status(200).json({ message: 'Workout deleted successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// module.exports = {
//     getWorkouts,
//     getWorkout,
//     createWorkout,
//     updateWorkout,
//     deleteWorkout
// }




const mongoose = require('mongoose');
const Workout = require('../models/workoutModel');

// Get all workouts for the logged-in user
const getWorkouts = async (req, res) => {
    const user_id = req.user._id;
    try {
        const workoutData = await Workout.find({ user_id }).sort({ createdAt: -1 });

        if (workoutData.length === 0) {
            return res.status(404).json({ message: 'No workouts found' });
        }

        res.status(200).json(workoutData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid workout ID' });
    }

    try {
        const workoutData = await Workout.findOne({ _id: id, user_id: req.user._id });

        if (!workoutData) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        res.status(200).json(workoutData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create a workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    const user_id = req.user._id;

    try {
        const newWorkout = await Workout.create({ title, reps, load, user_id });
        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid workout ID' });
    }

    try {
        const updatedWorkout = await Workout.findOneAndUpdate(
            { _id: id, user_id: req.user._id },
            req.body,
            { new: true }
        );

        if (!updatedWorkout) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        res.status(200).json(updatedWorkout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid workout ID' });
    }

    try {
        const deletedWorkout = await Workout.findOneAndDelete({ _id: id, user_id: req.user._id });

        if (!deletedWorkout) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        res.status(200).json({ message: 'Workout deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
};
