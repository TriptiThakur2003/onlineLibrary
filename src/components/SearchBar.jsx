// src/components/SearchBar.jsx
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <>
    <label htmlFor="searchbar"></label>
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

export default SearchBar;
