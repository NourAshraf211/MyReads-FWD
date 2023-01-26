import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as API from "../BooksAPI"


const BookDetailes = (props) => {
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        const callAPI = async () => {
            const book = await API.get(bookId);
            console.log(book);
            setBook(book);
        };
        callAPI();
    }, [bookId])

    return (
        <>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className='Container'>
            <Link to="/" className="close-search" >
              Close
            </Link>
                <div className='book-cover'
                    style={{
                        backgroundImage:
                        `url(${book.imageLinks?.thumbnail || ""})`,
                    }}
                ></div>
                <div className='book-info'>
                    <div className='book-header'>
                        <div>
                            <h2 className='bookTitle'>{book.title}</h2>
                            <p className='bookAuthors'>
                                {(book.authors || []).map(author => (
                                    <span>{author}</span>
                                ))}
                            </p>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={book?.shelf} onChange={(e) => props.changeShelf(book, e.currentTarget.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <p className='book-description'>{book.description}</p>
                    <div className='book-data'>
                        <div className='one'>
                            <p>PUBLISHER</p>
                            <p>{book.publisher}</p>
                        </div>
                        <div className='one'>
                            <p>FIRST PUBLISH</p>
                            <p>{book.publishedDate}</p>
                        </div>
                        <div className='one'>
                            <p>LANGUAGE</p>
                            <p>{book.language}</p>
                        </div>
                        <div className='one'>
                            <p>PAGES</p>
                            <p>{book.pageCount}</p>
                        </div>
                        <div className='one categories'>
                            <p>CATEGORIES</p>
                            {(book.categories || []).map(category => (
                                <span>{category}</span>
                            ))}
                        </div>
                    </div>
                    <div className='book-links'>
                        <a href={book.previewLink} rel="noreferrer" target='_blank'>Preview Sample</a>
                        <a href={book.infoLink} rel="noreferrer" target='_blank'>Buy the book</a>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default BookDetailes;