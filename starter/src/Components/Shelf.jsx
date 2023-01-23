import React from 'react';
import Book from './Book';

const Shelf = (props) => {
    const {books, changeShelf} = props;
    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{props.shelfTilte}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {(books || []).map(book => (
                        <Book
                            key={book.id}
                            bookData = {book}
                            changeShelf = {changeShelf}
                        />
                    ))}
                  </ol>
                </div>
              </div>
    );
}
 
export default Shelf;