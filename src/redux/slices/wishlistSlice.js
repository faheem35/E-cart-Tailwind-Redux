import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
          name: 'wishlist',
          initialState: [],
          reducers:{
                    addToWishlist: (state, actionFromView)=>{
                              state.push(actionFromView.payload)

                    },
                    removeItem:(state, actionFromWishlist)=>{
                            return  state.filter(item=>item.id!= actionFromWishlist.payload)
                    }
          }

})

export const {addToWishlist,removeItem}=wishlistSlice.actions  //to perform action from other components to wishlist store. eg: ad products to wishlist store
export default wishlistSlice.reducer  //to get access to the store from a component