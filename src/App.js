import React, {useState} from 'react';
import './App.css';
import Books from './Books/Books'
import AddBookForm from './Books/AddBookForm'
import EditBookForm from './Books/EditBookForm'

const Main = () => {

  const someBooks = [
    { id: 1, title: 'Book 1', available: true},
    { id: 2, title: 'Book 2', available: false },
    { id: 3, title: 'Book 3', available: true },
  ]
  const initialFormState = { id: null, title: '', isbn: '' }


  const [books, setBooks] = useState(someBooks)
  const [editing, setEditing] = useState(false)
  const [currentBook, setcurrentBook] = useState(initialFormState)

  const addBook = book => {
    book.id = books.length + 1
    setBooks([...books, book])
  }
  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id))
    setEditing(false)
  }
  const editBook = book => {
    setEditing(true)
    setcurrentBook({id: book.id, title: book.title, isbn: book.isbn})
  }
  const updateBook = (id, updatedBook) => {
    setEditing(false)
    setBooks(books.map(book => (book.id === id ? updatedBook: book)))
  }

  return (
    <div className="container">
      <h1>Mini Library CRUD App using React 16.8</h1>
      <div className="row">
        {editing ? 
          (
            <div className="col-md-4">
              <h2>Edit a book</h2>
                <EditBookForm editing={editing} setEditing={setEditing} currentBook={currentBook} updateBook={updateBook}/>
            </div>
          )
        :
          (
          <div className="col-md-4">
            <h2>Add a book</h2>
            <AddBookForm addBook={addBook}/>
          </div>
          )
        }
        <div className="col-md-8">
          <h2>Books list</h2>
          <Books books={books} deleteBook={deleteBook} editBook={editBook}/>
        </div>
      </div>
    </div>
  )
}

export default Main;
