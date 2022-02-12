import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
   isLoggedIn: false,
};

const authSlice = createSlice({
   name: 'authication',
   initialState: initialAuthState,
   reducers: {
      login(state) {
         state.isLoggedIn = true;
      },
      logout(state) {
         state.isLoggedIn = false;
      },
   },
});

export default authSlice;
