// src/pages/AddBook.jsx
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { addBook } from '../redux/booksSlice'

function AddBook() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newBook = {
      id: Date.now(),
      title,
      author,
      category: category.toLowerCase(),
      description,
      rating,
    }

    dispatch(addBook(newBook))
    navigate('/books')
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center mb-4">Add New Book</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. fiction, sci-fi"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Rating</label>
            <input
              type="number"
              className="form-control"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </div>
    </>
  )
}

export default AddBook
