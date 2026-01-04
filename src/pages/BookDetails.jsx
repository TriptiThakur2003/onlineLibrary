// Hook to read URL parameters (book id) and Link for navigation
import { useParams, Link } from "react-router-dom";

// Static book data (used for displaying book details) 
import { useSelector } from "react-redux";

// Common layout wrapper for Navbar and consistent UI
import Layout from "../components/Layout";

function BookDetails() {
  // Extract the "id" parameter from the URL (e.g. /book/123)
  const { id } = useParams();

  // Find the book whose id matches the URL parameter from Redux store
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id === Number(id));

  // If no book is found with the given id
  if (!book) {
    return (
      <Layout>
        <section className="d-block py-4">
          {/* Message shown when book does not exist */}
          <h2 className="text-center mt-4">Book not found</h2>

          {/* Navigation back to Browse Books page */}
          <div className="text-center mt-3">
            <Link to="/books" className="btn btn-secondary">
              Back to Browse Books
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // If book exists, display its details
  return (
    <Layout>
      <section>
        <div className="container mt-4 h-100">
          <div className="row">
            {/* Book image section */}
            <div className="col-md-6">
              <img
                src={book.image}
                alt={book.title}
                className="w-100 rounded"
              />
            </div>

            {/* Book information section */}
            <div className="col-md-6">
              <h1 className="mb-3 fs-1 text-brown mt-5 fs-2 text-xxl mt-3">
                {book.title}
              </h1>

              {/* Author name */}
              <h5 className="text-muted mb-3">
                by {book.author}
              </h5>

              {/* Book description */}
              <p>{book.description}</p>

              {/* Book rating */}
              <p>
                <strong>Rating:</strong> {book.rating} / 5
              </p>

              {/* Button to go back to Browse Books */}
              <Link
                to="/books"
                className="btn-orange rounded-pill px-4 py-2 mt-3"
              >
                Back to Browse Books
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Export BookDetails component
export default BookDetails;
