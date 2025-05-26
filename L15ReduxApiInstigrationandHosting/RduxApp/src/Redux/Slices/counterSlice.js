import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    count: 0,
};


const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        // setCount: (state, action) => action.payload,
        // setCountIncrement: (state, action) => state + 1,

        // setCountDecrement: (state, action) => state - 1,
        // reset: () => 0,


        
        setCountIncrement: (state, action) => {
            state.count ++;
            console.log(state.count);
        },
        setCountDecrement: (state, action) => {
            state.count --;
            console.log(state.count);
        },
    },
});

export const { setCount, setCountIncrement, setCountDecrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
