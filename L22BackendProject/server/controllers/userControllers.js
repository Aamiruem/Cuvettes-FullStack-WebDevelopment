// const User = require('../models/userModel');

// //Login user
// const loginUser = async (req, res) => {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username, password });

//     res.json({msg: "Login successful"});

//     if (user) {
//         res.status(200).json({ message: 'Login successful' });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }
// };


// //Signup user
// const signupUser = async (req, res) => {
//     const { username, password } = req.body;
//     const user = await User.create({ username, password });
//     res.json({ msg: "User created successfully" });
    
//     res.status(201).json({ message: 'User created successfully' });
// };

// module.exports = { loginUser, signupUser };






// const User = require('../models/userModel');

// // Login user
// const loginUser = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         const user = await User.findOne({ username, password });

//         if (user) {
//             return res.status(200).json({ message: 'Login successful' });
//         } else {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };

// // Signup user
// const signupUser = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Username already exists' });
//         }

//         await User.create({ username, password });

//         return res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };

// module.exports = { loginUser, signupUser };






// const User = require('../models/userModel');

// //Login user
// const loginUser = async (req, res) => {
//     res.json({ msg: "User logged in!" });
// };


// //Signup user
// const signupUser = async (req, res) => {
    
//     res.json({ msg: "User sign up!" });

// };

// module.exports = { loginUser, signupUser };








// // controllers/userController.js
// const User = require('../models/userModel');

// const loginUser = async (req, res) => {
//     //Login user
//     const loginUser = async (req, res) => {
//         res.json({ msg: "user logged in!" });
//     };
// };

// const signupUser = async (req, res) => {
//     //Signup user
//     const signupUser = async (req, res) => {
//         const {email, password} = req.body;
//         try{
//             const user = await User.signup(email, passowrd);




//             res.status(200).json({ email, user });
//         } catch(err){
//             res.status(400).json({error:err.message});
//         }
//         // res.json({ msg: "User sign up!" });

//     };
// };

// module.exports = { loginUser, signupUser };







// const User = require('../models/userModel');
// const createToken = require('../utils/token');

// // Login user
// const loginUser = async (req, res) => {
//     const {_id, email, password } = req.body;
//     try {
//         const user = await User.login(email, password); // Assumes user has _id


//         //create token
//         const token = createToken(_id);
//         res.status(200).json({ email, password, token });
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

// // Signup user
// const signupUser = async (req, res) => {
//     const {_id,  email, password } = req.body;

//     try {
//         const user = await User.signup(email, password); // Assumes user has _id


//         //create token
//         const token = createToken(user._id);
//         res.status(200).json({ email: user.email, token });
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

// // ✅ Do NOT export `token`
// module.exports = { loginUser, signupUser };















// Import the User model from the models directory
const User = require('../models/userModel');

// Import a utility function to create a token (likely JWT)
const createToken = require('../utils/token');

// -----------------------------
// LOGIN CONTROLLER FUNCTION
// -----------------------------
const loginUser = async (req, res) => {
    // Destructure _id, email, and password from request body
    // NOTE: Normally you wouldn't expect _id in login input — you’d get it after verification.
    const { _id, email, password } = req.body;

    try {
        // Attempt to log in the user using a static method defined on User model
        // Assumes User.login(email, password) validates credentials and returns a user object
        const user = await User.login(email, password);

        // Create a token using the user's _id (not the one from req.body!)
        const token = createToken(user._id); // better to use user._id here

        // Respond with the email, password (⚠️ exposing password is NOT recommended!), and token
        res.status(200).json({ email, password, token });
    } catch (err) {
        // If login fails, return a 400 status with the error message
        res.status(400).json({ error: err.message });
    }
};

// -----------------------------
// SIGNUP CONTROLLER FUNCTION
// -----------------------------
const signupUser = async (req, res) => {
    // Destructure email and password from the request body
    const {_id,  email, password } = req.body;

    try {
        // Attempt to create a new user using the User.signup() method
        // Assumes User.signup() hashes password and saves user to DB
        const user = await User.signup(email, password);

        // Create a token using the new user's _id
        const token = createToken(_id);

        // Respond with the user's email and the generated token
        res.status(200).json({ email, password, token });
    } catch (err) {
        // If signup fails (e.g., email already in use), return a 400 error
        res.status(400).json({ error: err.message });
    }
};

// Export the controller functions so they can be used in route definitions
// ❌ Don't export token or sensitive data
module.exports = { loginUser, signupUser };
