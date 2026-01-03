// src/pages/BrowseBooks.jsx
import Navbar from '../components/Navbar'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'
import booksData from '../data/booksData'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function BrowseBooks() {
  const { category } = useParams()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredByCategory = category
    ? booksData.filter((book) => book.category === category)
    : booksData

  const filteredBooks = filteredByCategory.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center mb-4">
          {category ? `${category.toUpperCase()} Books` : 'Browse Books'}
        </h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="row">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div className="col-md-4 mb-4" key={book.id}>
                <BookCard book={book} />
              </div>
            ))
          ) : (
            <p className="text-center">No books match your search.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default BrowseBooks
