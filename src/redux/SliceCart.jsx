import { createSlice } from "@reduxjs/toolkit";

const SliceCart = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },

  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      // console.log(action.payload);
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    // end of addtocart

    removeCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);

      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    // end of removeCart

    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },
    // end of increaseQuantity

    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem.quantity > 1) {
        if (findItem) {
          findItem.quantity--;
          findItem.totalPrice -= findItem.price;
          state.totalQuantity--;
          state.totalPrice -= findItem.price;
        }
      }
    },
    // end of decreaseQuantity
  },
});

export const { addToCart, removeCart, increaseQuantity, decreaseQuantity } =
  SliceCart.actions;
export default SliceCart.reducer;
