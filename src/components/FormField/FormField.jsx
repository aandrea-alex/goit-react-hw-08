import { Field, ErrorMessage } from 'formik';
import { useId } from 'react';

const FormField = ({ children, name, styles, ...props }) => {
  const inputId = useId();
  return (
    <div>
      <label className={styles.label} htmlFor={inputId}>
        {children}
      </label>
      <Field className={styles.input} id={inputId} name={name} {...props} />
      <span className={styles.error}>
        <ErrorMessage name={name} as="span" />
      </span>
    </div>
  );
};

export default FormField;
