// ReduxStore.ts
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slices/CounterSlice";
import todoReducer from "../slices/ToDoSlice";
import cartReducer from "../slices/CartSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todo: todoReducer,
    cart: cartReducer,
  },
});

// ✅ Make sure these two lines exist
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
