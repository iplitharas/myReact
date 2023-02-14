import BookList from "./BookList";
import AddBook from "./AddBook";
import {useState} from "react";

function App() {

  const [books , setBooks] = useState([])

  const handleAddBook = (book) => {
    setBooks([...books, book])
  }
  const deleteBookById = (id) => {
    setBooks(books.filter(( book) => { return book.id !== id }))
  }
  const editBookById = (id, newTitle) => {
    setBooks(books.map(  (book) => {
      if (book.id === id ) {
          return {...book, title: newTitle}
      }
      return book
    } ))

  }

  return (
    <div className="app">
      <h1> Reading List</h1>
      <BookList books={books} onDelete = {deleteBookById} onEdit= {editBookById}/>
      <AddBook handleAddBook={handleAddBook}/>
    </div>
  );
}

export default App;
