// import { configureStore } from '@reduxjs/toolkit';

// import counterReducer from '../Slice/State/counterSlice';
// import userReducer from '../Slice/State/userSlice';


// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         user: userReducer,



//     }
// });





import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        id: '',
        name: '',
        email: '',
        phone: '',
        password: ''
    },
    users: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUsers: (state, action) => {
            state.users.push(action.payload);
        },
        editUser: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        resetUser: (state) => {
            state.user = initialState.user;
        }
    }
});

export const { setUser, setUsers, editUser, deleteUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
