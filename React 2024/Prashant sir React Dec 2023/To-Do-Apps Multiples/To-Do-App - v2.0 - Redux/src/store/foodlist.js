import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: [],
  reducers: {
    addFoodItem: (state, action) => {
      let newObjectItem = {
        name: action.payload.textDisplay,
        dueDate: action.payload.dateDisplay,
      };
      state.push(newObjectItem);
    },
    deleteItems: (state, action) => {
      return state.filter((item) => item.name != action.payload);
    },
  },
});
export const foodAction = foodSlice.actions;
export default foodSlice;
