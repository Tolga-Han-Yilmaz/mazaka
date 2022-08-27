import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsList: [],
  loading: true,
};

export const getProducts = createAsyncThunk(
  "products,getProducts",
  async () => {
    const url = `https://powerful-savannah-74330.herokuapp.com/data`;
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProductsList: (state) => {
      state.productsList = [];
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.productsList = payload;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// const products = createSlice({
//   name: "Products",
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },

//     appendProducts: (state, action) => {
//       state.products = [...state.products, action.payload];
//     },
//   },
// });

export const { clearProductsList } = productsSlice.actions;
export default productsSlice.reducer;
