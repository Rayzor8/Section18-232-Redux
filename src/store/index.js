import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
   counter: 0,
   toggleCounter: false,
};

const counterSlice = createSlice({
   name: 'counter',
   initialState,
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
         state.toggleCounter = !state.toggleCounter;
      },
   },
});

const store = configureStore({
   reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
