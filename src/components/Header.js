import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
   const { isLoggedIn } = useSelector((state) => state.auth);
   const { logout } = authActions;
   const dispatch = useDispatch();
   return (
      <header className={classes.header}>
         <h1>Redux Playground</h1>
         {isLoggedIn && (
            <nav>
               <ul>
                  <li>
                     <a href="/">My Products</a>
                  </li>
                  <li>
                     <a href="/">My Sales</a>
                  </li>
                  <li>
                     <button onClick={() => dispatch(logout())}>Logout</button>
                  </li>
               </ul>
            </nav>
         )}
      </header>
   );
};

export default Header;
