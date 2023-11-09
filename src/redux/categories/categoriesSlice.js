// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categries',
  initialState,
  reducers: {
    checkStatus: (state, action) => { state.categories = action.payload === 'Under construction' ? 'Under construction' : state.categories; },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
