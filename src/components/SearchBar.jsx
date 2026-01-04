// SearchBar component
// This component is reusable and controlled by parent state
// It receives the search term and setter function via props
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <>
      {/* Accessible label for screen readers */}
      {/* Visually hidden but improves accessibility */}
      <label htmlFor="searchbar" className="visually-hidden">
        Search books
      </label>

      {/* Search input field */}
      {/* Controlled input bound to searchTerm state */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        id="searchbar"
        name="search"
      />
    </>
  );
}

// Export SearchBar for use in BrowseBooks page
export default SearchBar;
