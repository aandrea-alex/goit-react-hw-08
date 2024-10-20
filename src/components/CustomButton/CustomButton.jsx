import styles from './CustomButton.module.css';

const CustomButton = ({ onClick, children, ...props }) => {
  return (
    <button className={styles.btn} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
