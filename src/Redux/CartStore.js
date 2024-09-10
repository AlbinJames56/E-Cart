// const {configureStore}=require ("@reduxjs/toolkit")
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slice/ProductSlice";
import WishListSlice from "./Slice/WishListSlice";
 

 
const cartStore=configureStore({
    reducer:{
        ProductSlice:ProductSlice,
        WishListSlice
    }
})
export default cartStore