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











// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   // State for user input
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault(); // stop page from refreshing

//     try {
//       // Send login request to backend
//       const response = await axios.post('http://localhost:4000/api/user/login', {
//         email,
//         password
//       });

//       console.log('Login successful:', response.data);
//       setError(null);

//       // TODO: Save token to localStorage or context
//       // localStorage.setItem('token', response.data.token);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Login failed');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           placeholder='Email..'
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

//         <button type="submit">Login</button>
//       </form>

//       {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
//     </div>
//   );
// };

// export default Login;











import './Login.css';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {


  // State for user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // ✅ success state

  const handleLogin = async (e) => {
    e.preventDefault(); // stop page from refreshing
    console.log(email, password);


    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:4000/api/user/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);
      setError(null);
      setSuccess('Login successful!'); // ✅ set success message

      // Optional: Clear form
      setEmail('');
      setPassword('');

      // TODO: Save token to localStorage or context
      // localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
      setSuccess(null); // Clear success if error
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email.."
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

        <button type="submit">Login</button>
      </form>

      {/* Display error or success */}
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginTop: '1rem' }}>{success}</p>}
    </div>
  );
};

export default Login;





// import './Login.css';
// import { useState } from 'react';
// import { useLogin } from '../../Hooks/useLogin';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [localError, setLocalError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const { login, error } = useLogin();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       await login(email, password);  // Call login from hook
//       setSuccess('Login successful!');
//       setLocalError(null);
//       setEmail('');
//       setPassword('');
//     } catch (err) {
//       setLocalError('Login failed');  // Fallback error
//       setSuccess(null);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>

//       {/* Show error from hook or local */}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {localError && <p style={{ color: 'red' }}>{localError}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//     </div>
//   );
// };

// export default Login;












// import './Login.css';
// import { useState } from 'react';
// import { useLogin } from '../../Hooks/useLogin';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [success, setSuccess] = useState(null);

//   const { login, error } = useLogin();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       await login(email, password); // Call login from hook
//       setSuccess('Login successful!');
//       setEmail('');
//       setPassword('');
//     } catch (err) {
//       // error from the hook will be handled via `error` variable
//       setSuccess(null);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           autoComplete="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>

//       {/* Show error from useLogin or success */}
//       {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
//       {success && <p style={{ color: 'green', marginTop: '1rem' }}>{success}</p>}
//     </div>
//   );
// };

// export default Login;
