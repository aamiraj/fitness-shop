import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
export interface UsersState {
  email: string;
  role: string;
  token: string;
  iat: string;
}

export interface AuthState {
  user: UsersState | null;
  token: string | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
  },
});

export const {  } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth.value;

export default authSlice.reducer;
