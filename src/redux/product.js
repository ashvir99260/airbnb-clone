/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: false,
  error: null,
  productList: []
};
const {
  actions: { productListFetchStart, productListFetchSuccessful, productListFetchFailure },
  reducer
} = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productListFetchStart: (state, action) => ({
      ...state,
      error: null,
      loading: true,
      success: false,
      productList: []
    }),
    productListFetchSuccessful: (state, action) => ({
      ...state,
      success: true,
      loading: false,
      productList: action.payload
    }),
    productListFetchFailure: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false
    })
  }
});

export default reducer;
export { productListFetchStart, productListFetchSuccessful, productListFetchFailure };
