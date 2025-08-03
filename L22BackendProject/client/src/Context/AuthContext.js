// import { createContext, useReducer } from "react";

// export const AuthContext = createContext();
// export const authReducer = (state, action) => {
//     switch (action.type) {
//         case "LOGIN":
//             return {
//                 user: action.payload,
//             };
//         case "LOGOUT":
//             return {
//                 user: null,
//             };
//         default:
//             return state;
//     }
// }
// export const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(authReducer, {
//         user: null
//     })
//     console.log("AuthContext state:", state);

//     return (
//         <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
//     );
// };

// export default AuthContextProvider;











import { createContext, useReducer } from "react";

// 1. Create the context object
export const AuthContext = createContext();

// 2. Define the reducer function that handles login/logout actions
export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload, // Save user info when logged in
            };
        case "LOGOUT":
            return {
                user: null, // Clear user info on logout
            };
        default:
            return state; // Return unchanged state for unknown actions
    }
};

// 3. Create the provider component
export const AuthContextProvider = ({ children }) => {
    // useReducer to manage auth state using authReducer
    const [state, dispatch] = useReducer(authReducer, {
        user: null, // Initial state: no user logged in
    });

    console.log("AuthContext state:", state);

    return (
        // 4. Provide state and dispatch to all children components
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
