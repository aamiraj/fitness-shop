import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface FilterState {
  searchbyname: string;
  minPrice: number;
  maxPrice: number;
  category: string[];
  sort: string;
  limit: number;
}

// Define the initial state using that type
const initialState: FilterState = {
  searchbyname: "",
  minPrice: 0,
  maxPrice: 1000000,
  category: [],
  sort: "",
  limit: 10000,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchbyname: (state, action: PayloadAction<string>) => {
      state.searchbyname = action.payload;
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.category.push(value);
    },

    removeCategory: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      const newA = state.category.filter((a) => a !== value);
      state.category = newA;
    },
    resetCategory: (state) => {
      state.category = [];
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const {
  setSearchbyname,
  setMinPrice,
  setMaxPrice,
  setCategory,
  removeCategory,
  resetCategory,
  setSort,
} = filterSlice.actions;

export default filterSlice.reducer;
