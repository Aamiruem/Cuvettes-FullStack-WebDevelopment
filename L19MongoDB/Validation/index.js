// const mongoose = require("mongoose");

// // Database connection with error handling
// async function connectDB() {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/test", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("✅ MongoDB Connected Successfully");
//         return true;
//     } catch (err) {
//         console.error("❌ MongoDB Connection Error:", err.message);
//         return false;
//     }
// }

// // Enhanced User Schema with comprehensive validation
// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Name is required"],
//         minlength: [3, "Name must be at least 3 characters"],
//         maxlength: [50, "Name cannot exceed 50 characters"],
//         trim: true,
//         validate: {
//             validator: function (v) {
//                 return /^[a-zA-Z ]+$/.test(v);
//             },
//             message: "Name can only contain letters and spaces"
//         }
//     },
//     phone: {
//         type: Number,
//         required: [true, "Phone number is required"],
//         unique: true,
//         validate: {
//             validator: function (v) {
//                 return /^[0-9]{10,15}$/.test(v.toString());
//             },
//             message: "Phone number must be 10-15 digits"
//         }
//     },
//     city: {
//         type: String,
//         required: [true, "City is required"],
//         enum: {
//             values: ["Narkatia Ganj", "Patna", "Delhi", "Mumbai"],
//             message: "{VALUE} is not a supported city"
//         }
//     },
//     state: {
//         type: String,
//         default: "Bihar",
//         validate: {
//             validator: function (v) {
//                 return /^[a-zA-Z ]+$/.test(v);
//             },
//             message: "State can only contain letters and spaces"
//         }
//     },
//     email: {
//         type: String,
//         required: false,
//         unique: true,
//         lowercase: true,
//         validate: {
//             validator: function (v) {
//                 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
//             },
//             message: "Invalid email format"
//         }
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         immutable: true
//     }
// }, {
//     timestamps: true // Adds createdAt and updatedAt automatically
// });

// // Custom validation example
// UserSchema.path('phone').validate(async function (value) {
//     const count = await this.model('User').countDocuments({ phone: value });
//     return !count;
// }, 'Phone number already exists');

// // Creating model
// const User = mongoose.model("User", UserSchema);

// // CRUD Operations with validation handling
// async function performOperations() {
//     const isConnected = await connectDB();
//     if (!isConnected) return;

//     try {
//         // 1. CREATE - With validation
//         const newUser = new User({
//             name: "kamran",
//             phone: 1121423111, // Valid 10-digit number
//             city: "Narkatia Ganj",
//             email: "kamran@example.com"
//         });

//         await newUser.validate(); // Explicit validation
//         const savedUser = await newUser.save();
//         console.log("✅ User created:", savedUser);

//         // 2. READ
//         const users = await User.find();
//         console.log("📋 All users:", users);

//         // 3. UPDATE with validation
//         const updatedUser = await User.findByIdAndUpdate(
//             savedUser._id,
//             { city: "Patna" },
//             {
//                 new: true,
//                 runValidators: true // Ensures update validations run
//             }
//         );
//         console.log("🔄 Updated user:", updatedUser);

//         // 4. DELETE
//         const deletedUser = await User.findByIdAndDelete(savedUser._id);
//         console.log("❌ Deleted user:", deletedUser);

//     } catch (err) {
//         if (err.name === 'ValidationError') {
//             console.error("🔴 Validation Errors:");
//             for (const field in err.errors) {
//                 console.error(`- ${field}: ${err.errors[field].message}`);
//             }
//         } else {
//             console.error("🔴 Operation failed:", err.message);
//         }
//     } finally {
//         await mongoose.connection.close();
//         console.log("🔌 MongoDB Connection Closed");
//     }
// }

// // Execute the operations
// performOperations();














// const mongoose = require("mongoose");

// // Improved database connection with better error handling
// async function connectToDatabase() {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/test", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("✅ MongoDB connection established successfully");
//     } catch (err) {
//         console.error("❌ MongoDB connection error:", err.message);
//         process.exit(1); // Exit process with failure code
//     }
// }

// // Enhanced User Schema with better validation
// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Name is required"],
//         unique: true,
//         maxlength: [30, "Name cannot be longer than 30 characters"],
//         trim: true,
//         validate: {
//             validator: function (v) {
//                 return /^[a-zA-Z ]+$/.test(v);
//             },
//             message: "Name can only contain letters and spaces"
//         }
//     },
//     phone: {
//         type: Number,
//         required: [true, "Phone number is required"],
//         unique: true,
//         validate: {
//             validator: function (v) {
//                 return /^[0-9]{10}$/.test(v.toString());
//             },
//             message: "Phone number must be exactly 10 digits"
//         }
//     },
//     city: {
//         type: String,
//         required: [true, "City is required"],
//         trim: true
//     },
//     state: {
//         type: String,
//         default: "Bihar",
//         trim: true
//     }
// }, {
//     timestamps: true // Adds createdAt and updatedAt automatically
// });

// // Creating model
// const User = mongoose.model("User", UserSchema);

// // Function to create and save user with error handling
// async function createUser() {
//     try {
//         await connectToDatabase();

//         const user1 = new User({
//             name: "kamran Hussain",
//             phone: 1234567809,
//             city: "Narkatia Ganj"
//         });

//         const savedUser = await user1.save();
//         console.log("✅ User created successfully:", savedUser);

//     } catch (err) {
//         if (err.name === 'ValidationError') {
//             console.error("🔴 Validation errors:");
//             for (const field in err.errors) {
//                 console.error(`- ${field}: ${err.errors[field].message}`);
//             }
//         } else if (err.code === 11000) {
//             console.error("🔴 Duplicate key error:", err.message);
//         } else {
//             console.error("🔴 Error saving user:", err.message);
//         }
//     } finally {
//         mongoose.connection.close();
//         console.log("🔌 MongoDB connection closed");
//     }
// }

// // Execute the function
// createUser();
















const mongoose = require("mongoose");

//connection with database
mongoose.connect("mongodb://127.0.0.1:27017/test")
.then(() => {
    console.log("Connection Established");
})
.catch((err) => {
    console.log(err);
})

//creating Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: 30,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: 10,
        // max: 10, not allowed
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        default: "Bihar",
    },
});


//creating model
const User = mongoose.model("User", UserSchema);
module.exports = User;

const user1 = new User({
    name: "kamran Hussain",
    phone: 1234567809,
    city: "Narkatia Ganj"
});

user1.save();


const user2 = new User({
    name: "Azad",
    phone: 1234567809,
    city: "Narkatia Ganj",
    state: "Bihar"

})

user2.save();



const createDocument = async () => {
    try {
        const result = await User.create({
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "1234567890",
            city: "New York",
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();



const readDocument = async () => {
    try {
        const data = await User.find({ state: "Bihar" }).select({ id: 1, name: 1, email: 1 });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}   

readDocument();


const updateDocument = async () => {
    try {
        const data = await User.updateOne({ state: "Bihar" }, { $set: { state: "Rajasthan" } });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

updateDocument();
