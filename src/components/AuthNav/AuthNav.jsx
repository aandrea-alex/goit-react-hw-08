import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  const location = useLocation();
  const getMenuItemClass = to => {
    return to === location.pathname
      ? clsx(styles.link, styles.active)
      : styles.link;
  };

  return (
    <div>
      <NavLink className={getMenuItemClass('/register')} to="/register">
        Register
      </NavLink>
      <NavLink className={getMenuItemClass('/login')} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
