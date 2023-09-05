import { createSlice } from "@reduxjs/toolkit";
import { getAdmins } from "../../services/adminServies";

const initailAdmins = await getAdmins();

export const adminSlice = createSlice({
  name: 'admins',
  initialState: initailAdmins,
  reducers: {
    setAdmins: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { setAdmins } = adminSlice.actions;

export default adminSlice.reducer;