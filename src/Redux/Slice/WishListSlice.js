import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromList: (state, action) => {
      wishlist = state.wishlist.filter((item) => item.id != action.payload);
      localStorage.setItem.filter((item) => item.id != action.payload);
      return state.wishlist.filter((item) => item.id != action.payload);
    },
  },
});
export const { addToWishlist, removeFromList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
