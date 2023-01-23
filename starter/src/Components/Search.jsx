import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as API from "../BooksAPI"
import Book from './Book';


const Search = (props) => {
    const [input, setInput] = useState("");
    const [books, setBooks] = useState([]);

    const searchBook = async (e) => {
        setInput(e.currentTarget.value);
        const results = await API.search(e.currentTarget.value);
        console.log(results);
        if(results.error) return;
        setBooks(results);
    }

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                value={input}
                placeholder="Search by title, author, or ISBN"
                onChange={(e) => searchBook(e)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {(books || []).map(book => (
                    <Book
                        key={book.id}
                        bookData = {book}
                        changeShelf = {props.changeShelf}
                    />
                ))}
            </ol>
          </div>
        </div>
      )
}
 
export default Search;