import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [], // The initial state is an empty array
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload); // Add new item to the wishlist array
      // localStorage.setItem("wishlist", JSON.stringify(state.wishlist)); // Save to localStorage
    },
    removeFromList: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
      // localStorage.setItem("wishlist", JSON.stringify(state.wishlist)); // Save updated wishlist
    },
  },
});

export const { addToWishlist, removeFromList } = WishlistSlice.actions;
export default WishlistSlice.reducer;
