import React from 'react';

const Book = (props) => {
    const {bookData, changeShelf, allBooks} = props;

    const updateBookShelf = (e) => {
        changeShelf(bookData, e.currentTarget.value);
    }

    return ( 
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        `url(${bookData?.imageLinks?.smallThumbnail || ""})`,
                    }}
                    ></div>
                    <div className="book-shelf-changer">
                    <select value={bookData?.shelf || allBooks.find(book => book.id === bookData.id)?.shelf} onChange={(e) => updateBookShelf(e)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{bookData?.title || ""}</div>
                <div className="book-authors">{(bookData?.authors || []).map(auth => auth) || ""}</div>
            </div>
        </li>
     );
}
 
export default Book;