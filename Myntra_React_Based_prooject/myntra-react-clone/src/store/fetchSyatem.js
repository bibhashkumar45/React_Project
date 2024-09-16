import { createSlice } from "@reduxjs/toolkit";
import { items } from "../data/items";

const fatchStatausSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlydetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
       state.currentlydetching = true;
    },
    markFetchingEnd: (state) => {
       state.currentlydetching = false;
    },
  },
});

export const fatchingAction = fatchStatausSlice.actions;
export default fatchStatausSlice;
