import React from 'react';

const Book = (props) => {
    const {bookData, changeShelf} = props;

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
                        `url(${bookData?.imageLinks?.smallThumbnail})`,
                    }}
                    ></div>
                    <div className="book-shelf-changer">
                    <select value={bookData?.shelf || "none"} onChange={(e) => changeShelf(bookData, e.currentTarget.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{bookData?.title}</div>
                <div className="book-authors">{(bookData?.authors || []).map(auth => auth)}</div>
            </div>
        </li>
     );
}
 
export default Book;