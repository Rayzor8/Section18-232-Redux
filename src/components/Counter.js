import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
   const { counter, toggleCounter } = useSelector((state) => state.counter);
   const { isLoggedIn } = useSelector((state) => state.auth);
   const { decrement, increase, increment, toggle } = counterActions;

   const dispatch = useDispatch();
   const toggleCounterHandler = () => {
      dispatch(toggle());
   };

   return (
      <>
         {isLoggedIn && (
            <main className={classes.counter}>
               <h1>Redux Counter</h1>
               {toggleCounter && <div className={classes.value}>{counter}</div>}
               <div className={classes['button-group']}>
                  <button
                     onClick={() => dispatch(increment())}
                     disabled={toggleCounter === false}
                  >
                     Increment
                  </button>
                  <button
                     onClick={() => dispatch(increase(5))}
                     disabled={toggleCounter === false}
                  >
                     Increase by 5
                  </button>
                  <button
                     onClick={() => dispatch(decrement())}
                     disabled={toggleCounter === false}
                  >
                     Decrement
                  </button>
                  <button onClick={toggleCounterHandler}>Toggle Counter</button>
               </div>
            </main>
         )}
      </>
   );
};

export default Counter;
