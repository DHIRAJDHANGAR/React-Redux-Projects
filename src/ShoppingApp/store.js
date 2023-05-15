import { configureStore } from "@reduxjs/toolkit";
import ShoppingAppSlice from "./Reducer/ShoppingAppSlice";

export const store = configureStore({
  reducer: {
    listReducer: ShoppingAppSlice,
  },
});
