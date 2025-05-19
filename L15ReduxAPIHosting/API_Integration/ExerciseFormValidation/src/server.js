// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const users = [];

// app.post('/register', (req, res) => {
//   const { name, email, password } = req.body;
  
//   // Basic validation
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }
  
//   // Check if user already exists
//   if (users.some(user => user.email === email)) {
//     return res.status(400).json({ message: 'Email already registered' });
//   }
  
//   // In a real app, you would hash the password before storing
//   const newUser = { id: users.length + 1, name, email, password };
//   users.push(newUser);
  
//   res.status(201).json({ message: 'Registration successful', user: newUser });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

