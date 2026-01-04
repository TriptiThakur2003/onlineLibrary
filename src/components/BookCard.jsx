// src/components/BookCard.jsx

// Import Link component from React Router for navigation
import { Link } from "react-router-dom";
 
function BookCard({ book }) {
  return (
    // Card container with Bootstrap classes for styling
    <div className="card category-card h-100 border-0">
      {/* Book cover image */}
      <img src={book.image} className="card-img-top" alt={book.title} />
      <div className="card-body">
        {/* Book title */}
        <h5 className="card-title">{book.title}</h5>
        {/* Book author */}
        <p className="card-text">Author: {book.author}</p>

        {/* Link to navigate to the book's detail page */}
        <Link
          to={`/book/${book.id}`}
          className="btn-orange rounded-pill px-4 py-2 "
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
