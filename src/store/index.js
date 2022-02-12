import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import authSlice from './authSlice';

// register slice reducers to store
const store = configureStore({
   reducer: {
      counter: counterSlice.reducer,
      auth: authSlice.reducer,
   },
});

// select methods for dispatch actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
