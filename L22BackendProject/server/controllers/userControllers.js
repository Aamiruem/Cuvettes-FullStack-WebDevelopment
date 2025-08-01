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







const User = require('../models/userModel');
const createToken = require('../utils/token');

// Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.login(email, password); // Assumes user has _id
        const token = createToken(user._id);
        res.status(200).json({ email: user.email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password); // Assumes user has _id


        //create token
        const token = createToken(user._id);
        res.status(200).json({ email: user.email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// ✅ Do NOT export `token`
module.exports = { loginUser, signupUser };
