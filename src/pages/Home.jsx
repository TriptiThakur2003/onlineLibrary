// src/pages/Home.jsx
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Home() {
  const categories = [
    'Fiction',
    'Non-Fiction',
    'Sci-Fi',
    'Mystery',
    'Biography',
  ]

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center mb-4">Welcome to the Online Library</h1>

        <h3 className="mb-3">Book Categories</h3>

        <div className="list-group">
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
      </div>
    </>
  )
}

export default Home
