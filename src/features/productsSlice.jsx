import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsList: [],
  loading: true,
};

// Gönderilen api isteğini doğrudan güncelleyebilmek için middleware kullandım. Redux-Toolkit'de default olarak Thunk kullanmaktadır. Thunk'ın amacı reducers'a işlenmiş sonuçları göndermeden önce gecikmeli asenkron işlemlerin yürütülmesini sağlamaktır.

export const getProducts = createAsyncThunk(
  "products/getProducts", // action type ismi
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

export const { clearProductsList } = productsSlice.actions;
export default productsSlice.reducer;
