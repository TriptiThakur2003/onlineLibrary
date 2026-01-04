// Import React hook for managing local component state
import { useState } from "react";

// Redux hook to dispatch actions to the store
import { useDispatch } from "react-redux";

// React Router hook for programmatic navigation
import { useNavigate } from "react-router-dom";

// Redux action to add a new book to the store
import { addBook } from "../redux/booksSlice";

// Common layout wrapper (Navbar + consistent spacing)
import Layout from "../components/Layout";

function AddBook() {
  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Used to redirect user after successful form submission
  const navigate = useNavigate();

  // Local state for form fields
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  // State to handle validation error messages
  const [error, setError] = useState("");

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Required field validation
    if (!title || !author || !category) {
      setError("Title, Author, and Category are required.");
      return;
    }

    // Rating range validation
    if (rating && (rating < 1 || rating > 5)) {
      setError("Rating must be between 1 and 5.");
      return;
    }

    // Create new book object
    const newBook = {
      id: Date.now(), // Unique ID
      title,
      author,
      category: category.toLowerCase(),
      description,
      rating,
      image:
        image ||
        "https://i.etsystatic.com/46359922/r/il/ba4a47/5228806126/il_fullxfull.5228806126_sk9p.jpg",
    };

    // Dispatch action to add book to Redux store
    dispatch(addBook(newBook));

    // Redirect user to Browse Books page
    navigate("/books");
  };

  return (
    <Layout>
      <div className="container mt-4 pb-5">
        {/* Page heading */}
        <h1 className="mb-3 fs-2 text-center text-brown mt-5 text-xxl mt-3">
          Add New Book
        </h1>

        {/* Show validation error if present */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Form card */}
        <div className="card card-body category-card formCard mx-auto mt-4">
          <form onSubmit={handleSubmit}>
            {/* Title input */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Author input */}
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author *
              </label>
              <input
                id="author"
                name="author"
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            {/* Image URL input */}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL
              </label>
              <input
                id="image"
                name="image"
                type="text"
                className="form-control"
                placeholder="Optional: Enter book cover image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            {/* Category input */}
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category *
              </label>
              <input
                id="category"
                name="category"
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            {/* Description textarea */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Rating input */}
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Rating (1–5)
              </label>
              <input
                id="rating"
                name="rating"
                type="number"
                className="form-control"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="btn-orange rounded-pill px-4 py-2 w-100"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

// Export component
export default AddBook;
