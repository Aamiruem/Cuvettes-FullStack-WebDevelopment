// import React from 'react'
// import { createSlice } from '@reduxjs/toolkit';
// import { useSelector, useDispatch } from "react-redux";

// const initialState = {
//     user: {
//         name: '',
//         email: '',
//         phone: '',
//         username: '',
//         password: '',
//         confirmPassword: '',
//         age: ''
//     }
// };
// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setMainUser(state, action) {
//             state.user = action.payload;
//         }
//     }
// });

// export default userSlice.reducer;
// export const { setMainUser } = userSlice.actions;












// import { createSlice } from '@reduxjs/toolkit';

// // Initial state for the user
// const initialState = {
//     user: {
//         name: '',
//         email: '',
//         phone: '',
//         username: '',
//         password: '',
//         confirmPassword: '',
//         age: ''
//     },
//     isActive: false, users:[]
// };

// // Creating the slice
// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         // Reducer to update the user in the state
//         setMainUser(state, action) {
//             state.user = action.payload;
//         },
//         // Reducer to set the active status of the user
//         setUsers(state, action) {
//             state.users.push(action.payload);
//         },
//         // setIsActive(state, action) {
//         //     state.isActive = action.payload;
//         // },

//         // setActive: (state) => {
//         //     state.isActive = !state.isActive;
//         // }


//         reducers: {
//             setMainUser(state, action) {
//                 state.user = action.payload;
//             },
//             setUsers(state, action) {
//                 state.users.push(action.payload);
//             },
//             setIsActive(state, action) {
//                 state.isActive = action.payload;
//             }
//         }
        
//     }
// });

// // Export the reducer to be added to the store
// export default userSlice.reducer;

// // Export the action to use in components
// export const { setMainUser, setUsers, setIsActive } = userSlice.actions;















import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user
const initialState = {
    user: {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        age: ''
    },
    isActive: false,
    users: []
};

// Creating the slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Set the main user
        setMainUser(state, action) {
            state.user = action.payload;
        },
        // Add a new user to the users array
        setUsers(state, action) {
            state.users.push(action.payload);
        },
        // Set user active status
        setIsActive(state, action) {
            state.isActive = action.payload;
        }
    }
});

// Export the reducer to be added to the store
export default userSlice.reducer;

// Export the actions to be used in components
export const { setMainUser, setUsers, setIsActive } = userSlice.actions;
