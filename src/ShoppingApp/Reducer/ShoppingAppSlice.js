import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  result: [],
};

export const ShoppingAppSlice = createSlice({
  name: "shoppingapp",
  initialState,
  reducers: {
    showList: (state, actions) => {
      state.value = actions.payload;
    },
    addToCard: (state, actions) => {
      const rsl = state.result.push(cart);
      console.log({ rsl });
    },
  },
});
export const { showList, addToCard } = ShoppingAppSlice.actions;
export default ShoppingAppSlice.reducer;
