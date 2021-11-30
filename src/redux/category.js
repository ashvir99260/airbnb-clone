/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: false,
  error: null,
  categories: []
};
const {
  actions: { categoriesListFetchStart, categoriesListFetchSuccessful, categoriesListFetchFailure },
  reducer
} = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoriesListFetchStart: (state, action) => ({
      ...state,
      error: null,
      loading: true,
      success: false,
      categories: []
    }),
    categoriesListFetchSuccessful: (state, action) => ({
      ...state,
      success: true,
      loading: false,
      categories: action.payload
    }),
    categoriesListFetchFailure: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false
    })
  }
});

export default reducer;
export { categoriesListFetchStart, categoriesListFetchSuccessful, categoriesListFetchFailure };
