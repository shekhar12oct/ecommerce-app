import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) {
        item.qty -= 1;
        if (item.qty === 0) {
          state.cart = state.cart.filter((i) => i.id !== action.payload);
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
