
import { RiContactsBook2Fill } from 'react-icons/ri';
import DocumentTitle from '../../components/DocumentTitle';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home page</DocumentTitle>
      <div className={styles.container}>
        <h1>Phone Book</h1>
        <p className={styles.author}>Alexandrov Andrey</p>
        <span aria-label="IoIosContacts icon">
          <RiContactsBook2Fill className={`${styles.icon} ${styles.large}`} />
        </span>
        <p className="styles.lang">React, Redux, JavaScript</p>
      </div>
    </>
  );
};
export default HomePage;
