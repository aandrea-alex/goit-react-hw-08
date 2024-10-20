import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import DocumentTitle from '../components/DocumentTitle';
import AppSection from '../components/AppSection/AppSection';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import Infinity from '../components/loaders/Infinity/Infinity';
import ContactsList from '../components/ContactsList/ContactsList';
import { SEARCH_LABEL } from '../auxiliary/constants';

const ContactsPage = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Contacts Page</DocumentTitle>
      <AppSection>
        <ContactForm />
        <SearchBox>{SEARCH_LABEL}</SearchBox>
        {isLoading && !error && <Infinity isLoading={isLoading} />}
        <ContactsList />
      </AppSection>
    </>
  );
};

export default ContactsPage;
