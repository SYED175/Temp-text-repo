import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // console.log(state.length);why can't i see array in slice
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id != action.payload.id);
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
