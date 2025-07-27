const workout = require('../models/workoutModel');

//Get All Data
const getWorkouts = async (req, res) => {
    try {
        const workoutData = await workout.find().sort({ createdAt: -1 });

        if (!workoutData || workoutData.length === 0) {
            return res.status(404).json({ message: 'No workouts found' });
        }

        res.status(200).json(workoutData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get a single workout by ID
const getWorkout = async (req, res) => {
    try {
        const id = req.params.id;
        const workoutData = await workout.findById({_id: id});

        if (!workoutData) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        res.status(200).json(workoutData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Create a new workout
const createWorkout = async (req, res) => {
    try {
        const newWorkout = new workout(req.body);
        await newWorkout.save();
        //or alternatively, you can use
        // const workout = await newWorkout.save();
        if (!newWorkout) {
            return res.status(400).json({ message: 'Failed to create workout' });
        }
        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Update a workout
const updateWorkout = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedWorkout = await workout.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        
        if (!updatedWorkout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json(updatedWorkout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedWorkout = await workout.findByIdAndDelete(id);
        if (!deletedWorkout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json({ message: 'Workout deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}
