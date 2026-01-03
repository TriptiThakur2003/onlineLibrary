// src/pages/NotFound.jsx
import { Link, useLocation } from 'react-router-dom'

function NotFound() {
  const location = useLocation()

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404</h1>
      <h3>Page Not Found</h3>

      <p className="mt-3">
        The page <strong>{location.pathname}</strong> does not exist.
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Go Back to Home
      </Link>
    </div>
  )
}

export default NotFound
