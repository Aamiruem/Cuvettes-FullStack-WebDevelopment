import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../Slice/State/counterSlice';
import userReducer from '../Slices/State/userSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        
        
        
    }
});
