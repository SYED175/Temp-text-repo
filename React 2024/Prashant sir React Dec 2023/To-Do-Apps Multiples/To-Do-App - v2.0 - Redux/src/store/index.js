import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./foodlist";

const store = configureStore({
  reducer: {
    food: foodSlice.reducer,
  },
});
export default store;
