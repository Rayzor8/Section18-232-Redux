import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
   const { counter, toggleCounter } = useSelector((state) => state);

   const dispatch = useDispatch();
   const toggleCounterHandler = () => {
      dispatch({ type: 'toggle' });
   };

   return (
      <main className={classes.counter}>
         <h1>Redux Counter</h1>
         {toggleCounter && <div className={classes.value}>{counter}</div>}
         <div className={classes['button-group']}>
            <button
               onClick={() => dispatch({ type: 'increment' })}
               disabled={toggleCounter === false}
            >
               Increment
            </button>
            <button
               onClick={() => dispatch({ type: 'increase', payload: 5 })}
               disabled={toggleCounter === false}
            >
               Increase by 5
            </button>
            <button
               onClick={() => dispatch({ type: 'decrement' })}
               disabled={toggleCounter === false}
            >
               Decrement
            </button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
         </div>
      </main>
   );
};

export default Counter;
