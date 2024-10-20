import SectionTitle from '../../components/SectionTitle/SectionTitle';
import DocumentTitle from '../../components/DocumentTitle';
import { ERR_404 } from '../../auxiliary/constants';
import styles from './NotFoundPage.module.css';
const NotFoundPage = () => {
  return (
    <>
      {' '}
      <DocumentTitle>NotFoundPage</DocumentTitle>
      <div className={styles.container}>
        <SectionTitle>{ERR_404}</SectionTitle>
      </div>
    </>
  );
};
export default NotFoundPage;
