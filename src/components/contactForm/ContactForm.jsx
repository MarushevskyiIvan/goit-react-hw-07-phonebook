import { Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';

import { useDispatch, useSelector } from 'react-redux';
import {} from 'redux/contactsSlice';
import { addContact } from 'redux/operations';
import { contactsSelector } from 'redux/selectors';

import {
  Error,
  StyledForm,
  FormBtn,
  StyledGroup,
  Input,
} from './ContactForm.styled';

const FormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Name is required'),
  number: Yup.string()
    .phone('UA', 'Please enter a valid phone number like (067-356-4454) ')
    .required('A phone number is required'),
});

const initialValue = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);

  const formSubmitHandler = ({ name, number }) => {
    if (
      contacts.some(items => items.name.toUpperCase() === name.toUpperCase())
    ) {
      alert(`${name} is already  in contact`);
      return;
    }
    dispatch(addContact({ name, number }));
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={FormSchema}
      onSubmit={(values, action) => {
        formSubmitHandler(values);

        action.resetForm();
      }}
    >
      <StyledForm>
        <StyledGroup>
          Name
          <Input name="name" type="text" />
          <Error name="name" component="span" />
        </StyledGroup>

        <StyledGroup>
          Number
          <Input
            name="number"
            type="text"
            placeholder="067-356-4454"
            maxLength="13"
          />
          <Error name="number" component="span" />
        </StyledGroup>

        <FormBtn type="submit">add contact</FormBtn>
      </StyledForm>
    </Formik>
  );
};
