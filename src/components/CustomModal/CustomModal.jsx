import styles from './CustomModal.module.css';
import clsx from 'clsx';

const CustomModal = ({ children, visible, setVisible }) => {
  const classStyle = clsx(styles.myModal, { [styles.active]: visible });
  return (
    <div className={classStyle} onClick={() => setVisible(false)}>
      <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default CustomModal;
