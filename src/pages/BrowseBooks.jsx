// src/pages/BrowseBooks.jsx
import Navbar from '../components/Navbar'
import booksData from '../data/booksData'

function BrowseBooks() {
  console.log(booksData) // temporary check

  return (
    <>
      <Navbar />
      <h1 className="text-center mt-4">Browse Books Page</h1>
    </>
  )
}

export default BrowseBooks
