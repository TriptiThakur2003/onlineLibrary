// src/App.jsx

// Import routing components from React Router for navigation
import { Routes, Route } from "react-router-dom";

// Import page components for different routes
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

// Import custom CSS for the app
import "./App.css";

/**
 * Main App component that defines the application's routing structure.
 * This component sets up all the routes for the online library application.
 */
function App() {
  return (
    // Routes component wraps all route definitions
    <Routes>
      {/* Home page route */}
      <Route path="/" element={<Home />} />

      {/* Browse all books route */}
      <Route path="/books" element={<BrowseBooks />} />
      {/* Browse books by category route (dynamic category parameter) */}
      <Route path="/books/:category" element={<BrowseBooks />} />

      {/* Individual book details route (dynamic book ID parameter) */}
      <Route path="/book/:id" element={<BookDetails />} />

      {/* Add new book route */}
      <Route path="/add-book" element={<AddBook />} />

      {/* Catch-all route for 404 Not Found pages */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
