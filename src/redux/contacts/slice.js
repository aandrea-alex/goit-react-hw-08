import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
  updateContact,
} from './operations';
import { logOut } from '../auth/operations';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isAdding: false,
    deletingItem: null,
    updatingItem: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, state => {
        state.isAdding = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isAdding = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isAdding = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, (state, action) => {
        state.deletingItem = action.meta.arg;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.deletingItem = null;
        state.error = action.payload;
      })

      .addCase(updateContact.pending, state => {
        state.isAdding = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isAdding = false;
        const updatedContact = action.payload;
        const contactIndex = state.items.findIndex(
          contact => contact.id === updatedContact.id
        );
        if (contactIndex !== -1) {
          state.items[contactIndex] = updatedContact;
        }
        state.error = null;
        state.updatingItem = null;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isAdding = false;
        state.error = action.payload;
      })

      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })

      .addCase('contacts/saveUpdatingItem', (state, action) => {
        state.updatingItem = action.payload;
      });
  },
});

export default contactsSlice.reducer;
