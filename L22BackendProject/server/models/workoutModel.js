const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    timestamps: {
        type: Date,
        default: Date.now
    }
});
const Workout = new mongoose.model('Workout', workoutSchema);

module.exports = Workout;
