// src/pages/BrowseBooks.jsx
import Navbar from '../components/Navbar'
import BookCard from '../components/BookCard'
import booksData from '../data/booksData'
import { useParams } from 'react-router-dom'

function BrowseBooks() {
  const { category } = useParams()

  const filteredBooks = category
    ? booksData.filter((book) => book.category === category)
    : booksData

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center mb-4">
          {category ? `${category.toUpperCase()} Books` : 'Browse Books'}
        </h1>

        <div className="row">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div className="col-md-4 mb-4" key={book.id}>
                <BookCard book={book} />
              </div>
            ))
          ) : (
            <p className="text-center">No books found in this category.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default BrowseBooks
