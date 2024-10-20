import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaPhone } from 'react-icons/fa';
import { deleteContact, saveUpdatingItemIndex } from '../../redux/contacts/operations.js';
import CustomButton from '../CustomButton/CustomButton';
import {
  selectDeletingItem,
  selectUpdatingItem,
  selectError,
} from '../../redux/contacts/selectors.js';
import {
  CAPTION_DELETE,
  CAPTION_DELETEING,
  CAPTION_EDIT,
  CAPTION_EDITING,
} from '../../js/constants';

import { SUCCESS_DELETE, ERR_DELETE } from '../../notification/constants.js';
import { errNotify } from '../../notification/error-notify.js';
import { successNotify } from '../../notification/success-notify.js';
import CustomModal from '../CustomModal/CustomModal.jsx';
import ConfirmationForm from '../ConfirmationForm/ConfrimationForm.jsx';

import styles from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number } }) => {
  const [confirmation, setConfirmation] = useState(false);
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const isOperationDel = useSelector(selectDeletingItem) === id;
  const isOperationUpdate = useSelector(selectUpdatingItem) === id;

  const handleDeleteItem = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        successNotify(SUCCESS_DELETE);
        setConfirmation(false);
      })
      .catch(() => {
        errNotify(ERR_DELETE);
      });
  };
  const handleCancel = () => {
    setConfirmation(false);
  };

  const handleEditItem = () => {   
    dispatch(saveUpdatingItemIndex(id));
  };

  return (
    <React.Fragment>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {number}
        </p>
      </div>
      <div className={styles.buttons}>
        <CustomButton onClick={() => setConfirmation(true)} type="button">
          {isOperationDel && !isError ? CAPTION_DELETEING : CAPTION_DELETE}
        </CustomButton>
        <CustomButton onClick={handleEditItem} type="button">
          {isOperationUpdate && !isError ? CAPTION_EDITING : CAPTION_EDIT}
        </CustomButton>
      </div>
      <CustomModal visible={confirmation} setVisible={setConfirmation}>
        <ConfirmationForm
          onOk={handleDeleteItem}
          onCancel={handleCancel}
        ></ConfirmationForm>
      </CustomModal>
    </React.Fragment>
  );
};

export default ContactItem;
