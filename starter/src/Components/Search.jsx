import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as API from "../BooksAPI"
import Book from './Book';


const Search = (props) => {
    const [input, setInput] = useState("");
    const [books, setBooks] = useState([]);
    const [results, setResults] = useState(true);

    const searchBook = async (e) => {
      if(e.currentTarget.value && e.currentTarget.value !== " "){
        setResults(true);
        setInput(e.currentTarget.value);
        const results = await API.search(e.currentTarget.value);
        console.log(results);
        if(results.error) return;
        setBooks(results);
      }else{
        setInput(e.currentTarget.value);
        setResults(false);
      }
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
                value={input || ''}
                placeholder="Search by title, author, or ISBN"
                onChange={(e) => searchBook(e)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {results ? (books || []).map(book => (
                    <li key={book.id}>
                      <Book
                        bookData = {book}
                        allBooks = {props.allBooks}
                        changeShelf = {props.changeShelf}
                      />
                    </li>
                )) : null}
            </ol>
          </div>
        </div>
      )
}
 
export default Search;