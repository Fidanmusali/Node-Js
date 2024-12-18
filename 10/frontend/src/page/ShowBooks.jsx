import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css"; 
const ShowBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books"); // Backend API
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="show-books-container">
      <h1>Books List</h1>
      <div className="add-button-container">
        <Link to="/books/create">
          <button className="add-button">+ Add Book</button>
        </Link>
      </div>
      <table className="books-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publish Year</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>
                <Link to={`/books/details/${book._id}`} className="info-button">
                  &#9432; 
                </Link>
                <Link to={`/books/edit/${book._id}`} className="edit-button">
                  &#9998; 
                </Link>
                <button
                  className="delete-button"
                  onClick={async () => {
                    try {
                      await axios.delete(`http://localhost:3000/books/${book._id}`);
                      setBooks(books.filter((b) => b._id !== book._id));
                    } catch (error) {
                      console.error("Error", error);
                    }
                  }}
                >
                  &#128465; 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBooks;
