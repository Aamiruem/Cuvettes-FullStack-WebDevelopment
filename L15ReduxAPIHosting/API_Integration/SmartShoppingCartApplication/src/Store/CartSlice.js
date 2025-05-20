// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     totalQuantity: 0,
//     totalAmount: 0,
//   },
//   reducers: {
//     addItem(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.items.find(item => item.id === newItem.id);
      
//       if (!existingItem) {
//         state.items.push({
//           id: newItem.id,
//           name: newItem.name,
//           price: newItem.price,
//           quantity: 1,
//           totalPrice: newItem.price,
//           image: newItem.image
//         });
//       } else {
//         existingItem.quantity++;
//         existingItem.totalPrice += newItem.price;
//       }
      
//       state.totalQuantity++;
//       state.totalAmount += newItem.price;
//     },
//     removeItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.items.find(item => item.id === id);
      
//       if (existingItem.quantity === 1) {
//         state.items = state.items.filter(item => item.id !== id);
//       } else {
//         existingItem.quantity--;
//         existingItem.totalPrice -= existingItem.price;
//       }
      
//       state.totalQuantity--;
//       state.totalAmount -= existingItem.price;
//     },
//     deleteItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.items.find(item => item.id === id);
      
//       state.items = state.items.filter(item => item.id !== id);
//       state.totalQuantity -= existingItem.quantity;
//       state.totalAmount -= existingItem.totalPrice;
//     },
//     clearCart(state) {
//       state.items = [];
//       state.totalQuantity = 0;
//       state.totalAmount = 0;
//     }
//   }
// });

// export const cartActions = cartSlice.actions;
// export default cartSlice.reducer;















import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      state.totalQuantity++;
      state.totalAmount += newItem.price;
      
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
      
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      state.items = state.items.filter(item => item.id !== id);
      state.totalQuantity -= existingItem.quantity;
      state.totalAmount -= existingItem.totalPrice;
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    replaceCart(state, action) {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
      state.totalAmount = action.payload.totalAmount || 0;
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

// Helper function to save cart to localStorage
export const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

// Helper function to load cart from localStorage
export const loadCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : undefined;
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return undefined;
  }
};
