import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCountInterval: (state, action) => {
            state.count = action.payload.count;
        }
    },
})

export const {setCountInterval} = counterSlice.actions;
// export const selectCount = (state) => state.counter.count;
export default counterSlice.reducer;
