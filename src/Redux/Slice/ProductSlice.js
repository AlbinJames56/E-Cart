import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Using async/await for cleaner syntax
export const fetchProductData = createAsyncThunk(
  "allProducts/fetchProductData",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    localStorage.setItem('products',JSON.stringify(response.data.products))

    return response.data.products
  }
);

const productSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = ""; // Reset error when a new request is made
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message || "API failed to fetch the data...";
      });
  },
});

export default productSlice.reducer;
