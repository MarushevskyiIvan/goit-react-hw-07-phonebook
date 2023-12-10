import { useDispatch, useSelector } from 'react-redux';
import { ListBtn, ListItem, ListNumber, ListText } from './ContactsList.styled';

import { selectorContacts } from 'redux/contactsSlice';
import { ItemWrapper } from 'components/App.styled';
import { deleteContact } from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  return (
    <ItemWrapper>
      {contacts.map(({ name, phone, id }) => {
        return (
          <ListItem key={id}>
            <ListText>{name}</ListText> :<ListNumber>{phone}</ListNumber>
            <ListBtn onClick={() => dispatch(deleteContact(id))} type="button">
              delete
            </ListBtn>
          </ListItem>
        );
      })}
    </ItemWrapper>
  );
};
