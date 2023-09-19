import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from "../../services/orderServies";

const initailOrders = await getOrders();

export const orderSlice = createSlice({
  name: 'orders',
  initialState: initailOrders,
  reducers: {
    setOrders: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;