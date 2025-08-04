// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";

// export const useSignup = () => {
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const { dispatch } = useAuthContext();

//     const signup = async (email, password) => {
//         setLoading(true);
//         setError(null);

//         const response = await fetch('https://localhost:4000/api/user/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//         });
//         const data = await response.json();

//         if (!response.ok) {
//             setLoading(false);
//             setError(data.error);
//         }
//         if (response.ok) {
//             setLoading(false);
//             setError(null);
//             // save user data in local storage
//             localStorage.setItem('user', JSON.stringify(data));

//             // update the user context
//             dispatch({ type: 'LOGIN', payload: data });
//         }
//     }

//     return { signup, error, loading }
// };








import { useState } from 'react';
import axios from 'axios';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signup = async (username, email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await axios.post('http://localhost:4000/api/user/signup', {
                username,
                email,
                password,
            });

            setIsLoading(false);
            return { success: true, data: res.data };
        } catch (err) {
            setIsLoading(false);
            setError(err.response?.data?.error || 'Signup failed');
            return { success: false };
        }
    };

    return { signup, error, isLoading };
};
