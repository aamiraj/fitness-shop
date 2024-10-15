import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface GlobalState {
  SHIPPING_COST: number;
  DISCOUNT_PCTG: number;
}

// Define the initial state using that type
const initialState: GlobalState = {
  SHIPPING_COST: 60,
  DISCOUNT_PCTG: 0.1,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

// export const {  } = globalSlice.actions;

export default globalSlice.reducer;
