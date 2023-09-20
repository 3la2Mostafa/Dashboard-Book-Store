import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "../../services/bookServies";

const initailBooks = await getBooks();
const initialState = {
  books: initailBooks,
  bookId :''
}

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    setBooks: (state, action) => {
      return state = action.payload;
    },
    bookId:(state, action) => {
      state.bookId =action.payload
    },

  }
})

export const { setBooks , bookId } = booksSlice.actions;

export default booksSlice.reducer;