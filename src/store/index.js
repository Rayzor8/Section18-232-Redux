import { createStore } from 'redux';

const initialState = {
   counter: 0,
   toggleCounter: false,
};

const counterReducer = (state, action) => {
   console.log(state);
   // rules of redux never mutate your state initialState, always replace initialState state with new state
   // copy and create new state
   // for predictable behavior 
   // source ref : primitive type vs reference type
   if (action.type === 'increment') {
      return {
         ...state,
         counter: state.counter + 1,
      };
   }

   if (action.type === 'increase') {
      return {
         ...state,
         counter: state.counter + action.payload,
      };
   }

   if (state.counter > 0 && action.type === 'decrement') {
      return {
         ...state,
         counter: state.counter - 1,
      };
   }

   if (action.type === 'toggle') {
      return {
         counter: initialState.counter, // reset state to initial state
         toggleCounter: !state.toggleCounter,
      };
   }
   return state;
};

const store = createStore(counterReducer, initialState);

export default store;
