// src/pages/AddBook.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";
import Layout from "../components/Layout";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !category) {
      setError("Title, Author, and Category are required.");
      return;
    }

    if (rating && (rating < 1 || rating > 5)) {
      setError("Rating must be between 1 and 5.");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      category: category.toLowerCase(),
      description,
      rating,
      image:
        image ||
        "https://i.etsystatic.com/46359922/r/il/ba4a47/5228806126/il_fullxfull.5228806126_sk9p.jpg",
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <Layout>
      <div className="container mt-4 pb-5">
        <h1 className="mb-3 fs-2 text-center text-brown mt-5 text-xxl mt-3">
          Add New Book
        </h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="card card-body category-card formCard mx-auto mt-4">
          <form onSubmit={handleSubmit}>
            {/* Title */}
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

            {/* Author */}
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

            {/* Image URL */}
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

            {/* Category */}
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

            {/* Description */}
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

            {/* Rating */}
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

export default AddBook;
