import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cardReducer from './cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cardReducer,
  },
});

export default store;
