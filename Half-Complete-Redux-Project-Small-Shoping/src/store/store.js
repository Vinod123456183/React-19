import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;





// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";

// // ✅ Load cart state from localStorage (if available)
// const savedCart = localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart"))
//   : { items: [] };

// const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
//   preloadedState: {
//     cart: savedCart, // ✅ preload with saved cart
//   },
// });

// // ✅ Save cart state to localStorage whenever store changes
// store.subscribe(() => {
//   localStorage.setItem("cart", JSON.stringify(store.getState().cart));
// });

// export default store;
