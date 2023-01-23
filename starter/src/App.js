import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Search from "./Components/Search";
import * as API from "./BooksAPI"
import "./App.css";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    const callAPI = async () => {
        const books = await API.getAll();
        setAllBooks(books);
    };
    callAPI();
  }, [flip]);

  const changeShelf = async (book, shelf) => {
    await API.update(book, shelf);
    setFlip(!flip);
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
      </Routes>
    </div>
  );
}

export default App;
