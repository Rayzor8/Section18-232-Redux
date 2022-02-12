import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import { useSelector } from 'react-redux';

const Auth = () => {
   const dispatch = useDispatch();
   const { login } = authActions;
   const { isLoggedIn } = useSelector((state) => state.auth);

   const loginHandler = (e) => {
      e.preventDefault();
      dispatch(login());
   };
   return (
      <>
         {!isLoggedIn && (
            <main className={classes.auth}>
               <section>
                  <form onSubmit={loginHandler}>
                     <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                     </div>
                     <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                     </div>
                     <button>Login</button>
                  </form>
               </section>
            </main>
         )}
      </>
   );
};

export default Auth;
