import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectorContacts } from 'redux/selectors';

import { ListBtn, ListItem, ListNumber, ListText } from './ContactsList.styled';
import { ItemWrapper } from 'components/App.styled';

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
