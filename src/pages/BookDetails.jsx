// src/pages/BookDetails.jsx
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import booksData from '../data/booksData'

function BookDetails() {
  const { id } = useParams()

  const book = booksData.find((b) => b.id === Number(id))

  if (!book) {
    return (
      <>
        <Navbar />
        <h2 className="text-center mt-4">Book not found</h2>
        <div className="text-center mt-3">
          <Link to="/books" className="btn btn-secondary">
            Back to Browse Books
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="mb-3">{book.title}</h1>
        <h5 className="text-muted mb-3">by {book.author}</h5>

        <p>{book.description}</p>

        <p>
          <strong>Rating:</strong> {book.rating} / 5
        </p>

        <Link to="/books" className="btn btn-secondary mt-3">
          Back to Browse Books
        </Link>
      </div>
    </>
  )
}

export default BookDetails
