import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';
import styles from './AppNav.module.css';
import clsx from 'clsx';

const AppNav = () => {
  const { isLoggedIn } = useAuth();

  const location = useLocation();
  const getMenuItemClass = to => {
    return to === location.pathname
      ? clsx(styles.link, styles.active)
      : styles.link;
  };

  return (
    <nav className={styles.container}>
      <NavLink to="/" className={getMenuItemClass('/')}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getMenuItemClass('/contacts')}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default AppNav;
