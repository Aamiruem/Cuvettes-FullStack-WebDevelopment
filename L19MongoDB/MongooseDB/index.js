
// const mongoose = require('mongoose');

// // Connection with better error handling and options
// async function connectDB() {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/careerpedia', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
//         });
//         console.log('MongoDB connected successfully');

//         // Verify connection
//         mongoose.connection.on('error', err => {
//             console.error('MongoDB connection error:', err);
//         });

//         mongoose.connection.on('disconnected', () => {
//             console.log('MongoDB disconnected');
//         });

//     } catch (err) {
//         console.error('MongoDB initial connection error:', err);
//         process.exit(1); // Exit if can't connect
//     }
// }

// // Call the connection function
// connectDB();







// //create schema
// const mentorSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     confirmpassword: {
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
//     city: {
//         type: String,
//         required: true,
//     },
//     state: {
//         type: String,
//         required: true,
//     },
//     country: {
//         type: String,
//         required: true,
//     },
// });




// //create model
// const Mentor = mongoose.model('Mentor', mentorSchema);
// module.exports = Mentor;






const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
})




//create schema
const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});
    



//create model
const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor;



// const user1 = new user({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "1234567890",
//     city: "New York",
// })

// user1.save((err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// user1.save();




const createDocument = async () => {
    try {
        const result = await Mentor.create({
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "1234567890",
            city: "New York",
        });


        const data = await user1.save();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

createDocument();
