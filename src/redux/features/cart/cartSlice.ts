import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../../types/product.types";

// Define a type for the slice state
export interface CartState {
  product: TProduct;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

// Define the initial state using that type
const initialState: CartState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState>) => {
      const existingProduct = state.find(
        (cart) => cart.product._id === action.payload.product._id
      );

      if (!existingProduct) {
        state.push(action.payload);
        return;
      }

      existingProduct.quantity = action.payload.quantity;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const findIndex = state.findIndex(
        (cart) => cart.product._id === action.payload
      );

      if (findIndex !== -1) state.splice(findIndex, 1);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const existingProduct = state.find(
        (cart) => cart.product?._id === action.payload
      );

      if (existingProduct) {
        if (existingProduct.quantity + 1 > existingProduct.product.stock)
          return;

        existingProduct.quantity = existingProduct.quantity + 1;
        existingProduct.totalPrice =
          existingProduct.price * existingProduct.quantity;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingProduct = state.find(
        (cart) => cart.product?._id === action.payload
      );

      if (existingProduct) {
        if (existingProduct.quantity - 1 < 0) return;

        existingProduct.quantity = existingProduct.quantity - 1;
        existingProduct.totalPrice =
          existingProduct.price * existingProduct.quantity;
      }
    },
    resetCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
