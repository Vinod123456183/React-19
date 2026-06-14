import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ➕ Add item
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // ➖ Remove item (reduce quantity or delete completely)
    removeFromCart(state, action) {
      // const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === action.payload);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }
    },

    // 🗑️ Remove an item completely regardless of quantity
    deleteFromCart(state, action) {
      // const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // 🧹 Clear entire cart
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
