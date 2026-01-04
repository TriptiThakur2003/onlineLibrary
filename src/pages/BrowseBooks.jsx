// src/pages/BrowseBooks.jsx
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const books = useSelector((state) => state.books);

  const filteredByCategory = category
    ? books.filter((book) => book.category === category)
    : books;

  const filteredBooks = filteredByCategory.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <section className="d-block">
        <div className="container mt-4 py-4">
          <h1 className="mb-3 fs-2 text-center text-brown mt-5 fs-2 text-xxl mt-3">
            {category ? `${category.toUpperCase()} Books` : "Browse Books"}
          </h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="row">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div className="col-md-3 mb-4" key={book.id}>
                  <BookCard book={book} />
                </div>
              ))
            ) : (
              <p className="text-center">No books match your search.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BrowseBooks;
