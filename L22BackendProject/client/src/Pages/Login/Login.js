// // import React from 'react';
// import './Login.css';
//  // <- make sure path is correct

// const Login = () => {
//   return (
//     <div className="login-container">
//       <h2>Login Page</h2>
//       <form>
//         <label>Email:</label>
//         <input type="email" name="email" />

//         <label>Password:</label>
//         <input type="password" name="password" />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;











import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  // State for user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // stop page from refreshing

    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:4000/api/user/login', {
        email,
        password
      });

      console.log('Login successful:', response.data);
      setError(null);

      // TODO: Save token to localStorage or context
      // localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
};

export default Login;
