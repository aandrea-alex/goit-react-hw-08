import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import styles from './Layout.module.css';
export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <AppBar />
      <Outlet />
      {children}
      <Toaster />
    </div>
  );
};

export default Layout;
