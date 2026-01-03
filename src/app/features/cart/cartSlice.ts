import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { IProudct } from "../../../interfaces";

interface CartState {
    cartItems: IProudct[];
}

const initialState: CartState = {
    cartItems: [],
};

const cartSlice = createSlice({
  name: "cart", // ** Attached with Store
  initialState,
  reducers: {
    addtoCartAction: (state, actionPayLoad: PayloadAction<IProudct>) => {
      state.cartItems = [...state.cartItems, actionPayLoad.payload];
    }
  },
});

export const { addtoCartAction } = cartSlice.actions;

export default cartSlice.reducer;
