import { MSG_QUESTION, CAPTION_OK, CAPTION_CANCEL } from './constants';

import CustomButton from '../CustomButton/CustomButton';
import styles from './ConfirmationForm.module.css';

const ConfirmationForm = ({ onOk, onCancel }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onOk();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <p className={styles.question}>{MSG_QUESTION}</p>
      <CustomButton type="submit">{CAPTION_OK}</CustomButton>
      <CustomButton
        onClick={() => {
          onCancel();
        }}
        type="button"
      >
        {CAPTION_CANCEL}
      </CustomButton>
    </form>
  );
};
export default ConfirmationForm;
