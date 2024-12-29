import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [],
// };

const proSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchTerm: "",
    filteredData: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      // console.log(action.payload);
    },

    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchTerm } = proSlice.actions;
export default proSlice.reducer;
