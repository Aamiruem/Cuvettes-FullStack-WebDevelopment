// import React from 'react'
// import { createSlice } from '@reduxjs/toolkit';
// import { useSelector, useDispatch } from "react-redux";
// import { setCountIncrement, setCountDecrement } from '../Redux/Slices/counterSlice';

// const Counter = () => {

//     const count = useSelector(state => {
//         return state.counter.count
//     });
//     console.log(count);

//     const dispatch = useDispatch();
//     const handleIncrement = () => {
//         console.log("Increment button clicked");
//         // Dispatch an action to increment the count
//         dispatch(setCountIncrement());
//     }

//     const handleDecrement = () => {
//         console.log("Decrement button clicked");
//         // Dispatch an action to decrement the count
//         dispatch(setCountDecrement());
//     }
//     const handleReset = () => {
//         console.log("Reset button clicked");
//         // Dispatch an action to reset the count
//         dispatch(reset());
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleIncrement}>+</button>
//             <button onClick={handleDecrement}>-</button>
//             <button onClick={handleReset}>Reset</button>
//         </div>
//     )
// }

// export default Counter





// import React from 'react';
// // import { useSelector, useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setCountIncrement, setCountDecrement, reset } from '../Redux/Slices/counterSlice';

// const Counter = () => {
//     // const count = useSelector(state => state.counter.count);
//     const dispatch = useDispatch();

//     const handleIncrement = () => {
//         console.log("Increment button clicked");
//         dispatch(setCountIncrement());
//     };

//     const handleDecrement = () => {
//         console.log("Decrement button clicked");
//         dispatch(setCountDecrement());
//     };

//     const handleReset = () => {
//         console.log("Reset button clicked");
//         dispatch(reset());
//     };

//     return (
//         <div>
//             {/* <h1>{count}</h1> */}
//             <button onClick={handleIncrement}>+</button>
//             <button onClick={handleDecrement}>-</button>
//             <button onClick={handleReset}>Reset</button>
//         </div>
//     );
// };

// export default Counter;





















import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import {
    setCountIncrement,
    setCountIncrementBy5,
    setCountDecrement,
    reset
}
    from '../Redux/Slices/counterSlice';


const Counter = () => {
    // Get current count from Redux store
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrementBy5 = () => {
        console.log("Increment button clicked");
        dispatch(setCountIncrementBy5());
    };

    const handleIncrement = () => {
        console.log("Increment button clicked");
        dispatch(setCountIncrement());
    };

    const handleDecrement = () => {
        console.log("Decrement button clicked");
        dispatch(setCountDecrement());
    };

    const handleReset = () => {
        console.log("Reset button clicked");
        dispatch(reset());
    };

    return (
        <div>
            {/* <h1>{count}</h1> */}
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleIncrementBy5}>+5</button>

            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;
