import { createSlice } from "@reduxjs/toolkit";
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
  reducers: { },
});

// export const { increaseAction } = counterSlice.actions;

export default cartSlice.reducer;
