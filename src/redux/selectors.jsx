import { createSelector } from '@reduxjs/toolkit';

export const filterSelector = state => (state = state.filter.filter);
export const contactsSelector = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = createSelector([filterSelector], filter => filter);

export const selectorContacts = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
