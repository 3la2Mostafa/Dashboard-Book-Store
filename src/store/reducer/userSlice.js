import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../services/userServies";

const initailUsers = await getUsers();

export const userSlice = createSlice({
  name: 'users',
  initialState: initailUsers,
  reducers: {
    setUsers: (state, action) => {
      return state = action.payload;
    }
  }
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;