import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "../../services/bookServies";

const initailBooks = await getBooks();

export const booksSlice = createSlice({
  name: 'books',
  initialState: initailBooks,
  reducers: {
    setBooks: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;