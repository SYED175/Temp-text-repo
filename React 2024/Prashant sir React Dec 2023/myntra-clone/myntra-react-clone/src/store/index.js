import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
