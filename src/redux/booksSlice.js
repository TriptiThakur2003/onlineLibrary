// Import createSlice from Redux Toolkit to easily create a slice of state
import { createSlice } from "@reduxjs/toolkit";

// Import initial dummy book data
import booksData from "../data/booksData";

// Create a Redux slice for books
const booksSlice = createSlice({
  name: "books", // Name of this slice
  initialState: booksData, // Initial state of the slice is the dummy book data
  reducers: {
    // Reducer to add a new book
    addBook: (state, action) => {
      // Add the new book object to the beginning of the state array
      // Immer library (built-in with Redux Toolkit) allows direct state mutation
      state.unshift(action.payload);
    },
  },
});

// Export the action so components can dispatch it
export const { addBook } = booksSlice.actions;

// Export the reducer to be used in the store
export default booksSlice.reducer;
