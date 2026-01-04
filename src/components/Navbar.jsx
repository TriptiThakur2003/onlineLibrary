// Import Link and NavLink from react-router-dom
// Link is used for basic navigation
// NavLink is used when we want to apply active styles automatically
import { Link, NavLink } from "react-router-dom";

// Navbar component - visible on all pages
// Uses Bootstrap classes for responsiveness and styling
function Navbar() {
  return (
    // Main navbar wrapper
    // navbar-expand-lg → expands on large screens
    // sticky-top → sticks to top while scrolling
    // custom-navbar → custom glassmorphism styles from CSS
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar px-4">
      <div className="container">
        {/* Brand / Logo */}
        {/* Clicking this navigates user to Home page */}
        <Link className="navbar-brand fw-bold" to="/">
          Online Library
        </Link>

        {/* Toggler button for mobile view */}
        {/* Appears on small screens to toggle menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu container */}
        {/* Automatically expands/collapses based on screen size */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation links */}
          {/* ms-auto → pushes menu to right */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            
            {/* Home link */}
            {/* NavLink applies active styling when route matches */}
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/">
                Home
              </NavLink>
            </li>

            {/* Browse Books page link */}
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/books">
                Browse Books
              </NavLink>
            </li>

            {/* Add Book page link */}
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/add-book">
                Add Book
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

// Export Navbar so it can be reused across the app
export default Navbar;
