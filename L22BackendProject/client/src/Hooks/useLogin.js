// import { useState } from 'react';
// import {useAuthContext} from "./useAuthContext"

// export const useLogin = () => {
//     const [error, setError] = useState(null);
//     const { dispatch } = useAuthContext();


//     const login = async (email, password) => {
//         setError(null);

//         const response = await fetch('https://localhost:4000/api/user/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//         });
//         const data = await response.json();

//         if (!response.ok) {
//             setError(data.error);
//         }
//         if (response.ok) {
//             // save user data in local storage
//             localStorage.setItem('user', JSON.stringify(data));

//             // update the user context
//             dispatch({ type: 'LOGIN', payload: data });
//         }
//     };

//     return { login, error };
// };







// import { useState } from 'react';
// import axios from 'axios';
// import { useAuthContext } from './useAuthContext';

// export const useLogin = () => {
//     const [error, setError] = useState(null);
//     const { dispatch } = useAuthContext();

//     const login = async (email, password) => {
//         setError(null);

//         try {
//             const res = await axios.post('http://localhost:4000/api/user/login', {
//                 email,
//                 password,
//             });

//             const data = res.data;

//             // Save user to localStorage
//             localStorage.setItem('user', JSON.stringify(data));

//             // Update auth context
//             dispatch({ type: 'LOGIN', payload: data });

//         } catch (err) {
//             setError(err.response?.data?.error || 'Login failed');
//         }
//     };

//     return { login, error };
// };












// import { useState } from 'react';
// import { useAuthContext } from './useAuthContext';
// import axios from 'axios';

// export const useLogin = () => {
//     const [error, setError] = useState(null);
//     const { dispatch } = useAuthContext();

//     const login = async (email, password) => {
//         setError(null);

//         try {
//             const res = await axios.post('http://localhost:4000/api/user/login', {
//                 email,
//                 password,
//             });

//             const data = res.data;

//             // Save user to localStorage
//             localStorage.setItem('user', JSON.stringify(data));

//             // Update auth context
//             dispatch({ type: 'LOGIN', payload: data });
//         } catch (err) {
//             setError(err.response?.data?.error || 'Login failed');
//         }
//     };

//     return { login, error };
// };





import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null); // Reset error before trying login

        try {
            const res = await axios.post('http://localhost:4000/api/user/login', {
                email,
                password,
            });

            const data = res.data;

            // Save to localStorage
            localStorage.setItem('user', JSON.stringify(data));

            // Update context
            dispatch({ type: 'LOGIN', payload: data });

        } catch (err) {
            const errMsg = err.response?.data?.error || 'Login failed';
            setError(errMsg);

            // 🔴 Rethrow to let the component know login failed
            throw new Error(errMsg);
        }
    };

    return { login, error };
};
