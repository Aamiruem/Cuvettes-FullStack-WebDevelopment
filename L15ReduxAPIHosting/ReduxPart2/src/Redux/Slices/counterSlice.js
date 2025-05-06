// import { createSlice } from '@reduxjs/toolkit';

// // import { setCountInterval } from '../actions/counterActions'; // Removed unused import to fix the error


// // import {setCountIncrement, setCountDecrement } from '../Redux/Slices/counterSlice';

// // import { setCountIncrement, setCountDecrement } from '../actions/counterActions';

// const initialState = {count: 0}

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         //1st way to update the state
//         setCountInterval: (state, action) => {
//             state.count = action.payload.count;
//             // state.count = state.count +action.payload + 1;
//             // state.count = action.payload.count + 1; // Increment by 100vh
//         },

//         //2nd way to update the state
//         //originally we can use this way to update the state

//         setCountIncrement: (state) => {
//             state.count++;
//         },
//         setCountDecrement: (state) => {
//             state.count--;
//         }
//     },
// })

// export const {setCountInterval} = counterSlice.actions;
// // export const selectCount = (state) => state.counter.count;
// export default counterSlice.reducer;











import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        incrementByAmount(state, action) {
            state.count += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
