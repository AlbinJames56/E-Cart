import {createSlice}from '@reduxjs/toolkit' 
const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart: (state, action) => {
            const existingProduct = state.find(item => item.id === action.payload.id);
      
            if (existingProduct) {
                const quantityToAdd = action.payload.quantity || 1;  
                existingProduct.quantity += quantityToAdd;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            } else {
               
              const quantity = action.payload.quantity || 1;  
              state.push({ ...action.payload, quantity, totalPrice: quantity * action.payload.price });
            }
          },
        removeFromCart:(state,action)=>{
            return state.filter(Item=>Item.id!==action.payload)
        },
        EmptyCart:(state)=>{
            return state=[]
        }
    } 
})
export const {addToCart,removeFromCart,EmptyCart} =cartSlice.actions;
export default cartSlice.reducer;