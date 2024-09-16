import { createSlice } from "@reduxjs/toolkit";
import { items } from "../data/items";

const itemSlice=createSlice(
  {
    name:"Item",
    initialState:items,
    reducers:
    {
      addInitialItem:(store,action)=>
      {
        return action.payload;
      }

    }
  }
);

export const itemAction=itemSlice.actions;
export default itemSlice;

