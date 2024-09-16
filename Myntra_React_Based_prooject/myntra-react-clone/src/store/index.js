import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fatchStatausSlice from "./fetchSyatem";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    Item: itemSlice.reducer,
    fetchStatus: fatchStatausSlice.reducer,
    bag: bagSlice.reducer,
  },
});
export default myntraStore;
