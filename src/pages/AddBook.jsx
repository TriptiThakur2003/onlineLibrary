// src/pages/AddBook.jsx
import Navbar from '../components/Navbar'

function AddBook() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center mb-4">Add New Book</h1>

        <form>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter book title"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter author name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. fiction, sci-fi"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter book description"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Rating</label>
            <input
              type="number"
              className="form-control"
              placeholder="Rating (1 to 5)"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </div>
    </>
  )
}

export default AddBook
