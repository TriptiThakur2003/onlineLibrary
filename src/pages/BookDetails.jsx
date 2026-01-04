// src/pages/BookDetails.jsx
import { useParams, Link } from "react-router-dom";
import booksData from "../data/booksData";
import Layout from "../components/Layout";

function BookDetails() {
  const { id } = useParams();

  const book = booksData.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <Layout>
        <section className="d-block py-4">
          <h2 className="text-center mt-4">Book not found</h2>
          <div className="text-center mt-3">
            <Link to="/books" className="btn btn-secondary">
              Back to Browse Books
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section>
        <div className="container mt-4 h-100">
          <div className="row">
            <div className="col-md-6">
              <img
                src={book.image}
                alt={book.title}
                className="w-100 rounded"
              />
            </div>
            <div className="col-md-6">
              <h1 className="mb-3 fs-1 text-brown mt-5 fs-2 text-xxl mt-3">
                {book.title}
              </h1>
              <h5 className="text-muted mb-3">by {book.author}</h5>

              <p>{book.description}</p>

              <p>
                <strong>Rating:</strong> {book.rating} / 5
              </p>

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

export default BookDetails;
