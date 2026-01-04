// Layout component wraps the page with common UI (Navbar, spacing, etc.)
import Layout from "../components/Layout";

// React Router link for navigation without page reload
import { Link } from "react-router-dom";

// Reusable component to display book cards
import BookCard from "../components/BookCard";

// Hero section image
import booksImage from "../assets/books.png";

// Static data for categories and popular books
import { categories, popularBooks } from "../data/booksData";

function Home() {
  return (
    <Layout>
      {/* ===== Hero Section ===== */}
      <section>
        <div className="container mt-4 d-sm-flex align-items-center justify-content-center mx-auto">
          {/* Hero text */}
          <div>
            <h1 className="mainText text-brown">
              Welcome to the Online Library
            </h1>

            {/* Navigate to Browse Books page */}
            <Link className="nav-link mt-3 d-md-flex" to="/books">
              <span className="btn-orange rounded-pill px-4 py-2 fs-5">
                Browse Books
              </span>
            </Link>
          </div>

          {/* Hero image */}
          <img
            src={booksImage}
            alt="Books illustration"
            className="align-self-center booksImage"
          />
        </div>
      </section>

      {/* ===== Book Categories Section ===== */}
      <section>
        <div className="container mt-4 mx-auto">
          <h3 className="mb-3 fs-2 text-center text-brown mt-5 text-xxl">
            Book Categories
          </h3>

          {/* Category cards */}
          <div className="row mb-5 justify-content-center">
            {categories.map((category) => (
              <div className="col-md-3 col-6 mt-3" key={category.id}>
                {/* Clicking a category navigates to /books/:category */}
                <Link
                  to={`/books/${category.name.toLowerCase()}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card category-card h-100 border-0">
                    <div className="card-body">
                      {/* Category image */}
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-100"
                      />

                      {/* Category name */}
                      <h6 className="text-center mt-2">
                        {category.name}
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Popular Books Section ===== */}
      <section>
        <div className="container mt-4">
          <h3 className="mb-3 fs-2 text-center text-brown mt-5 text-xxl">
            Popular Books
          </h3>

          {/* Display popular books using BookCard */}
          <div className="row">
            {popularBooks.map((book) => (
              <div className="col-md-3 mb-4" key={book.id}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Export Home page component
export default Home;
