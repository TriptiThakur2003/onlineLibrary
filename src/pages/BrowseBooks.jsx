// Reusable component to display individual book details in card format
import BookCard from "../components/BookCard";

// Search input component for filtering books by title or author
import SearchBar from "../components/SearchBar";

// Hook to read URL parameters (used for category-based filtering)
import { useParams } from "react-router-dom";

// React hook for managing local state
import { useState } from "react";

// Hook to access Redux store state
import { useSelector } from "react-redux";

// Layout wrapper to include Navbar and maintain consistent UI
import Layout from "../components/Layout";

function BrowseBooks() {
  // Extract category parameter from URL (e.g. /books/fiction)
  const { category } = useParams();

  // Local state to store search input value
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch books array from Redux store
  const books = useSelector((state) => state.books);

  // Filter books by category if category exists in URL
  // Otherwise, show all books
  const filteredByCategory = category
    ? books.filter((book) => book.category === category)
    : books;

  // Further filter books based on search input (title or author)
  const filteredBooks = filteredByCategory.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <section className="d-block">
        <div className="container mt-4 py-4">
          {/* Page heading */}
          <h1 className="mb-3 fs-2 text-center text-brown mt-5 fs-2 text-xxl mt-3">
            {category
              ? `${category.toUpperCase()} Books`
              : "Browse Books"}
          </h1>

          {/* Search bar for filtering books */}
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          {/* Books listing */}
          <div className="row">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div className="col-md-3 mb-4" key={book.id}>
                  {/* Display each book using reusable BookCard */}
                  <BookCard book={book} />
                </div>
              ))
            ) : (
              // Message shown when no books match search/filter
              <p className="text-center">
                No books match your search.
              </p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Export BrowseBooks page
export default BrowseBooks;
