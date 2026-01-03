// src/components/SearchBar.jsx
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="form-control mb-4"
      placeholder="Search by title or author..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}

export default SearchBar
