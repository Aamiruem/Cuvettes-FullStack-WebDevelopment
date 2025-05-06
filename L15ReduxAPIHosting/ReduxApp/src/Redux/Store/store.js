// import { createStore } from 'redux';

// import React from 'react';

// // Action types
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';
// const RESET = 'RESET';

// // Action creators
// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });
// export const reset = () => ({ type: RESET });

// // Initial state
// const initialState = {
//   count: 0
// };

// // Reducer
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case DECREMENT:
//       return { ...state, count: state.count - 1 };
//     case RESET:
//       return { ...state, count: 0 };
//     default:
//       return state;
//   }
// };

// // Create store
// const store = createStore(counterReducer);

// export default store;





import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
