// Import configureStore from Redux Toolkit to create the Redux store
import { configureStore } from "@reduxjs/toolkit";

// Import the books reducer we created
import booksReducer from "./booksSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    // Register the books slice reducer under the 'books' key
    books: booksReducer,
  },
});

// Export the store to be used in the React app (Provider)
export default store;
