import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { loadCartFromLocalStorage, saveCartToLocalStorage } from './CartSlice';

// Load cart from localStorage if available
const preloadedState = {
  cart: loadCartFromLocalStorage() || {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  preloadedState
});

// Subscribe to store changes to persist cart to localStorage
store.subscribe(() => {
  const { cart } = store.getState();
  saveCartToLocalStorage(cart);
});

export default store;
