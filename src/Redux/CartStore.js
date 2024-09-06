// const {configureStore}=require ("@reduxjs/toolkit")
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slice/ProductSlice";
const cartStore=configureStore({
    reducer:{
        ProductSlice:ProductSlice
    }
})
export default cartStore