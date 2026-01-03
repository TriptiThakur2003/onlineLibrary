// src/pages/Home.jsx
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'

function Home() {
  const categories = [
    'Fiction',
    'Non-Fiction',
    'Sci-Fi',
    'Mystery',
    'Biography',
  ]

  const popularBooks = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
    },
    {
      id: 3,
      title: 'Dune',
      author: 'Frank Herbert',
    },
  ]

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center mb-4">Welcome to the Online Library</h1>

        <h3 className="mb-3">Book Categories</h3>
        <div className="list-group mb-5">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category.toLowerCase()}`}
              className="list-group-item list-group-item-action"
            >
              {category}
            </Link>
          ))}
        </div>

        <h3 className="mb-3">Popular Books</h3>
        <div className="row">
          {popularBooks.map((book) => (
            <div className="col-md-4 mb-4" key={book.id}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
