import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
   counter: 0,
   toggleCounter: false,
};

const counterSlice = createSlice({
   name: 'counter',
   initialState: initialCounterState,
   reducers: {
      increment(state) {
         state.counter++;
      },
      decrement(state) {
         state.counter > 0 && state.counter--;
      },
      increase(state, action) {
         state.counter += action.payload;
      },
      toggle(state) {
         state.counter = state.counter = 0;
         state.toggleCounter = !state.toggleCounter;
      },
   },
});

export default counterSlice;
