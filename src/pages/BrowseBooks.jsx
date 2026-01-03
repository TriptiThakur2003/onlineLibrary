// src/pages/BrowseBooks.jsx
import Navbar from '../components/Navbar'
import BookCard from '../components/BookCard'
import booksData from '../data/booksData'

function BrowseBooks() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center mb-4">Browse Books</h1>

        <div className="row">
          {booksData.map((book) => (
            <div className="col-md-4 mb-4" key={book.id}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BrowseBooks
