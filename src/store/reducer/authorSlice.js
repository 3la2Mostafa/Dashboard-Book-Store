import { createSlice } from "@reduxjs/toolkit";
import { getAuthors } from "../../services/authors";

const initialAuthors = await getAuthors();
const initialState = {
  authors: initialAuthors,
}

export const authorsSlice = createSlice({
  name: 'authors',
  initialState: initialState,
  reducers: {
    feachAuthors: (state, action) => {
      console.log('from slice',action.payload);
      return state = action.payload;
    }
  }
})

export const { feachAuthors } = authorsSlice.actions;
export default authorsSlice.reducer;