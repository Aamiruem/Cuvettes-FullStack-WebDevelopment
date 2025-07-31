// const express = require('express');
// const router = express.Router();


// const app = express();

// const {logingUser, signupUser} = require('../controllers/userControllers');

// //Login user
// router.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     const user = users.find(user => user.username === username && user.password === password);

//     if (user) {
//         res.status(200).json({ message: 'Login successful' });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }


// });


// //Signup user
// router.post('/signup', (req, res) => {
//     const { username, password } = req.body;
//     users.push({ username, password });
//     res.status(201).json({ message: 'User created successfully' });
// });

// module.exports = router;





// const express = require('express');
// const router = express.Router();


// const { logingUser, signupUser } = require('../controllers/userControllers');

// //Login user
// router.post('/login', logingUser );


// //Signup user
// router.post('/signup', signupUser);

// module.exports = router;







const express = require('express');
const router = express.Router();
const { loginUser, signupUser } = require('../controllers/userControllers');

//Login user
router.post('/login', loginUser);     // ✅ function handler

//Signup user
router.post('/signup', signupUser);   // ✅ function handler

module.exports = router;
