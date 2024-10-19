import { createSelector } from '@reduxjs/toolkit';

export const selectNameFilter = state => state.filters.name;
export const selectItems = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectItems, selectNameFilter],
  (items, strFilter) => {
    return strFilter?.length === 0
      ? items
      : items.filter(contact =>
          contact.name.toLowerCase().includes(strFilter.trim().toLowerCase())
        );
  }
);
