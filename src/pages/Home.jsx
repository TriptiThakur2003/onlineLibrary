// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import booksImage from "../assets/books.png";
import { categories, popularBooks } from "../data/booksData";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <section>
        <div className="container mt-4 d-sm-flex  align-items-center justify-content-center mx-auto">
          <div>
            <h1 className="mainText  text-brown">
              Welcome to the Online Library
            </h1>
            <Link className="nav-link  mt-3 d-md-flex" to="/books">
              <span className="btn-orange rounded-pill px-4 py-2 fs-5">
                Browse Books
              </span>
            </Link>
          </div>
          <img
            src={booksImage}
            alt=""
            className="align-self-center booksImage "
          />
        </div>
      </section>
      <section>
        <div className="container mt-4  mx-auto">
          <h3 className="mb-3 fs-2 text-center text-brown mt-5 fs-2 text-xxl">
            Book Categories
          </h3>
          <div className="row mb-5 justify-content-center ">
            {categories.map((category) => (
              <div className="col-md-3 col-6 mt-3" key={category.id}>
                <Link
                  to={`/books/${category.name.toLowerCase()}`}
                  className=" text-decoration-none text-dark"
                >
                  <div className="card category-card h-100 border-0">
                    <div className="card-body">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-100"
                      />
                      <h6 className="text-center mt-2">{category.name}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-4">
          <h3 className="mb-3 fs-2 text-center text-brown mt-5 fs-2 text-xxl">
            Popular Books
          </h3>
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

export default Home;
