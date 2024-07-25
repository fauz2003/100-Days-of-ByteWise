import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (prev, action) => {
            prev.count += action.payload;
        },
    },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
