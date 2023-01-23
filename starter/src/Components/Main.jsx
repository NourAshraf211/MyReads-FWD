import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

const Main = (props) => {
    const {allBooks, changeShelf} = props;

    return ( 
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf
                shelfTilte = "Want to Read"
                books = {allBooks.filter(book => book.shelf === "wantToRead")}
                changeShelf={changeShelf}
            />
            <Shelf
                shelfTilte = "Currently Reading"
                books = {allBooks.filter(book => book.shelf === "currentlyReading")}
                changeShelf={changeShelf}
            />
            <Shelf
                shelfTilte = "Read"
                books = {allBooks.filter(book => book.shelf === "read")}
            />
          </div>
          <div className="open-search">
            <Link to = "/search">Add a book</Link>
          </div>
        </div>
     );
}
 
export default Main;