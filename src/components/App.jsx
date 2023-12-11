import { Filter } from './filter/FormFilter';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';
import { ContactsTitle, TextError, Wrapper } from './App.styled';
import { GlobalStyle } from 'GlobalStale';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Loader } from './loader/Loader';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phone book</h1>
      <ContactForm />
      {isLoading && !error && <Loader />}
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {error ? (
        <TextError>Oоps you have a problem ...</TextError>
      ) : (
        <ContactsList />
      )}

      <GlobalStyle />
    </Wrapper>
  );
};
