// src/components/BookCard.jsx
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="card category-card h-100 border-0">
      <img src={book.image} className="card-img-top" alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">Author: {book.author}</p>

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
