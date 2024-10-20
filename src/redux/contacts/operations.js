import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInst.get('contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (values, thunkAPI) => {
    try {
      const response = await axiosInst.post('contacts', values);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.delete(`contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
    'contacts/updateContact',
    async (data, thunkAPI) => {
      try {
        const response = await axiosInst.patch(`contacts/${data.id}`, {
          name: data.name,
          number: data.number,
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const saveUpdatingItemIndex = id => ({
    type: 'contacts/saveUpdatingItem',
    payload: id,
  });
  