import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Load cart from localStorage
const savedCart = localStorage.getItem("cartItems");

const preloadedState = {
  cart: {
    items: savedCart ? JSON.parse(savedCart) : [],
  },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});