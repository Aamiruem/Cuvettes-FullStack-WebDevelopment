import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../Slice/State/counterSlice';
import userReducer from '../Slices/State/userSlice';
import { postApi } from '../Slices/Api/postApiSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        
        [postApi.reducerPath]: postApi.reducer,
        
    }
});
