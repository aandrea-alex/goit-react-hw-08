import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { CAPTION_LOGOUT, LABEL_WELCOM } from './constants';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>
        {LABEL_WELCOM}, {user.name}
      </p>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        {CAPTION_LOGOUT}
      </button>
    </div>
  );
};

export default UserMenu;
