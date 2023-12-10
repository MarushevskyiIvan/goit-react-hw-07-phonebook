import { Filter } from './filter/FormFilter';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';
import { Wrapper } from './App.styled';
import { GlobalStyle } from 'GlobalStale';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phone book</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Wrapper>
  );
};
