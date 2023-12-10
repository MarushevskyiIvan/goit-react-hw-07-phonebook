import { useDispatch, useSelector } from 'react-redux';
import { ListBtn, ListItem, ListNumber, ListText } from './ContactsList.styled';

import { contactsSelector, deleteContact } from 'redux/contactsSlice';
import { filterSelector } from 'redux/filterSlice';
import { ItemWrapper } from 'components/App.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contactFilter = useSelector(filterSelector);
  const selectContacts = useSelector(contactsSelector);

  const contacts = () => {
    return selectContacts.filter(({ value: { name } }) =>
      name.toLowerCase().includes(contactFilter.toLowerCase())
    );
  };

  return (
    <ItemWrapper>
      {contacts().map(({ value: { name, number }, id }) => {
        return (
          <ListItem key={id}>
            <ListText>{name}</ListText> :<ListNumber>{number}</ListNumber>
            <ListBtn onClick={() => dispatch(deleteContact(id))} type="button">
              delete
            </ListBtn>
          </ListItem>
        );
      })}
    </ItemWrapper>
  );
};
