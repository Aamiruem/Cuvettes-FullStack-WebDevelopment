// const mongoose = require('mongoose');

// const workoutSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     reps: {
//         type: Number,
//         required: true
//     },
//     load: {
//         type: Number,
//         required: true
//     },

//     user_id: {
//         type: String,
//         required: true
//     },
//     timestamps: {
//         type: Date,
//         default: Date.now
//     }
// });
// const Workout = new mongoose.model('Workout', workoutSchema);

// module.exports = Workout;





const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema(
    {
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
        user_id: {
            type: mongoose.Schema.Types.ObjectId, // Better to store as ObjectId
            required: true,
            ref: 'User' // optional, if you want to reference User model
        }
    },
    { timestamps: true } // Mongoose will add createdAt & updatedAt automatically
);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
