// import React from 'react'
// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//     count: 0,
// };


// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: 0,
//     reducers: {
//         // setCount: (state, action) => action.payload,
//         // setCountIncrement: (state, action) => state + 1,

//         // setCountDecrement: (state, action) => state - 1,
//         // reset: () => 0,



//         setCountIncrement: (state, action) => {
//             state.count ++;
//             console.log(state.count);
//         },
//         setCountDecrement: (state, action) => {
//             state.count --;
//             console.log(state.count);
//         },
//     },
// });

// export const { setCount, setCountIncrement, setCountDecrement, reset } = counterSlice.actions;
// export default counterSlice.reducer;





// import React from 'react'
// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//     count: 0
// };

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         setCountIncrement: (state) => {
//             state.count += 1;
//         },
//         setCountDecrement: (state) => {
//             state.count -= 1;
//         },
//     }
// });

// export const { setCountIncrement, setCountDecrement } = counterSlice.actions;
// export default counterSlice.reducer;








// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     count: 1
// };

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         setCountIncrement: (state) => {
//             state.count += 1;
//         },
//         setCountDecrement: (state) => {
//             state.count -= 1;
//         },
//         reset: (state) => {
//             state.count = 1;
//         },
//         setCountIncrement: (state, action) => {
//             state.count += action.payload;
//         }
//     }
// });

// export const { setCountIncrement, setCountDecrement, reset } = counterSlice.actions;
// export default counterSlice.reducer;






import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCountIncrementBy5: (state) => {
            state.count += 5;
        },

        setCountIncrement: (state) => {
            state.count += 1;
        },
        setCountDecrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
});

export const { setCountIncrement, setCountIncrementBy5, setCountDecrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
