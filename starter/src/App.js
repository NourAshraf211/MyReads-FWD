import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Search from "./Components/Search";
import * as API from "./BooksAPI"
import "./App.css";
import NotFound from "./Components/NotFound";
import BookDetailes from "./Components/BookDetailes";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
        const books = await API.getAll();
        setAllBooks(books);
    };
    callAPI();
  }, []);

  const changeShelf = async (book, shelf) => {
    book.shelf = shelf;
    API.update(book, shelf).then(() => {
      setAllBooks([...allBooks.filter((b) => b.id !== book.id), book]);
    });
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main 
          allBooks={allBooks}
          changeShelf={changeShelf}
        />} />
        <Route path="/search" element={<Search 
          allBooks={allBooks}
          changeShelf={changeShelf}
        />} />
        <Route path="/book/:bookId" element={<BookDetailes changeShelf={changeShelf}/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
