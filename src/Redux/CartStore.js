// const {configureStore}=require ("@reduxjs/toolkit")
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slice/ProductSlice";
import WishListSlice from "./Slice/WishListSlice";
import CartSlice from "./Slice/CartSlice";
 

 
const cartStore=configureStore({
    reducer:{
        ProductSlice:ProductSlice,
        WishListSlice,
        CartSlice
    }
})
export default cartStore