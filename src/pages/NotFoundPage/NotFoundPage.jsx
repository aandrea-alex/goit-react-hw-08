import DocumentTitle from '../../components/DocumentTitle';
import styles from './NotFoundPage.module.css';
const NotFoundPage = () => {
  return (
    <>
      {' '}
      <DocumentTitle>NotFoundPage</DocumentTitle>
      <div className={styles.container}>
        <p className={styles.title}>Page not found</p>
      </div>
    </>
  );
};
export default NotFoundPage;
