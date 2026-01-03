// src/components/BookCard.jsx
import { Link } from 'react-router-dom'

function BookCard({ book }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">Author: {book.author}</p>

        <Link to={`/book/${book.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default BookCard
