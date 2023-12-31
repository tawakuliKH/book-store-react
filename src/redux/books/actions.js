import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APP_ID = 'rMCxybjWy2nJxNQ9XHZB';
export const getBooks = createAsyncThunk('books/getBooks', async (URL, { rejectWithValue }) => {
  try {
    const data = await axios.get(`${URL + APP_ID}/books`);
    return data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addBook = createAsyncThunk('books/addBook', async ({ URL, newBook }, { rejectWithValue }) => {
  try {
    const data = await axios.post(`${URL + APP_ID}/books`, newBook, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async ({ URL, id }, { rejectWithValue }) => {
  try {
    const data = await axios.delete(`${URL + APP_ID}/books/${id}`);
    return data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
