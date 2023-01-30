import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {
    const {bookData, changeShelf, allBooks} = props;


    return (
        <div className="book">
                <div className="book-top">
                    <Link to={"/book/" + bookData.id}>
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        `url(${bookData?.imageLinks?.smallThumbnail || ""})`,
                    }}
                    ></div>
                    </Link>
                    <div className="book-shelf-changer">
                    <select value={bookData?.shelf || allBooks.find(book => book.id === bookData.id)?.shelf || "none"} onChange={(e) => changeShelf(bookData, e.currentTarget.value)}>
                        <option value="" disabled>Move to...</option>
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
     );
}
 
export default Book;