import { configureStore } from "@reduxjs/toolkit";
import proSlice from "./productSlice";
import SliceCart from "./SliceCart";

const store = configureStore({
  reducer: {
    cart: SliceCart,
    product: proSlice,
  },
});

export default store;
