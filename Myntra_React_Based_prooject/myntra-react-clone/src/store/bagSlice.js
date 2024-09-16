import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addTobag: (store, action) => {
      store.push(action.payload);
    },
    removeFromBag: (store, action) => {
      return store.filter((items) => items != action.payload);
    },
  },
});

export const bagAction = bagSlice.actions;
export default bagSlice;
