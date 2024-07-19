import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    modifyFetchDone: (state) => {
      state.fetchDone = true;
    },
    currentlyFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    currentlyFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
