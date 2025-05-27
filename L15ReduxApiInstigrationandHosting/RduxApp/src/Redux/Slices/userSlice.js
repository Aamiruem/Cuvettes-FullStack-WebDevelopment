import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from "react-redux";

const initialState = {
    user: {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        age: ''
    }
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        }   
    }
});

