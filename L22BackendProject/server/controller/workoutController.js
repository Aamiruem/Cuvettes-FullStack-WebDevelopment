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

module.exports = {
    getWorkouts
}
