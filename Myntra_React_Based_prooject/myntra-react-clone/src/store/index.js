import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fatchStatausSlice from "./fetchSyatem";



const myntraStore=configureStore(
  {
    reducer:{Item:itemSlice.reducer,
      fetchStatus:fatchStatausSlice.reducer,
    }
  }
)
export default myntraStore;