import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isLoggedIn: false,
    isActive: false,
    users: [],
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setMainUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isActive = true;
            state.loading = false;
        },
        setUsers: (state, action) => {
            state.users.push(action.payload);
        },
        setIsActive: (state, action) => {
            state.isActive = action.payload;
            state.isActive = true;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setLogout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.isActive = false;
            state.loading = false;
            state.users = [];
            state.error = null;
        },
    },
});

// Export the reducer to use in the store
export const { setMainUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
