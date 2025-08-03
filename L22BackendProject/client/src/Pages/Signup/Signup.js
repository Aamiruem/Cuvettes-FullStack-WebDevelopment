// import React from 'react';
// import './Signup.css'; // ✅ Make sure path matches where your CSS file is

// const Signup = () => {
//   return (
//     <div className="signup-container">
//       <h2>Signup Page</h2>
//       <form>
//         <label>Email:</label>
//         <input type="email" name="email" />

//         <label>Password:</label>
//         <input type="password" name="password" />

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

















// import React, { useState } from 'react';
// import axios from 'axios';
// import './Signup.css';

// const Signup = () => {
//   // Hold user input in state
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // prevent page refresh

//     try {
//       // Send POST request to your backend
//       const response = await axios.post('http://localhost:4000/api/user/signup', {
//         username,
//         email,
//         password
//       });

//       console.log('Signup successful:', response.data);
//       setError(null);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Signup failed');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup </h2>
//       <form onSubmit={handleSubmit}>
//         <label>username:</label>
//         <input
//           type="text"
//           name="username"
//           placeholder='Username'
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           placeholder='Email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           placeholder='Password'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Sign Up</button>
//       </form>

//       {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
//     </div>
//   );
// };

// export default Signup;






import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  // Hold user input in state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // ✅ success message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/user/signup', {
        username,
        email,
        password,
      });

      console.log('Signup successful:', response.data);
      setError(null);
      setSuccess('Signup successful!'); // ✅ Set success message

      // Optionally clear fields after successful signup
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
      setSuccess(null); // clear previous success message
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      {/* Show error or success message */}
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginTop: '1rem' }}>{success}</p>}
    </div>
  );
};

export default Signup;
