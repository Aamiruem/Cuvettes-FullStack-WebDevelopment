import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within a AuthProvider');
    }
    return context;
}








// import { useContext } from 'react';
// import { AuthContext } from '../Context/AuthContext';

// export const useAuthContext = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuthContext must be used within a AuthProvider');
//     }
//     return context;
// };
