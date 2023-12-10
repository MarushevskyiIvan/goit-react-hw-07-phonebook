import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { filterSelector } from './filterSlice';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);

      // state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const contactsSelector = state => state.contacts.items;

export const selectorContacts = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    console.log('selectorContacts');
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
