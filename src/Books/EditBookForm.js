import React, { useState, useEffect } from 'react'

const EditBookForm = props => {
    const [book, setBook] = useState(props.currentBook)
    useEffect(() => {
        setBook(props.currentBook)
    }, [props])

    const handleInputChange = event => {
        const { name, value } = event.target
        setBook({ ...book, [name]: value })
    }

    const doUpdateBook = (event) => {
        event.preventDefault()
        props.updateBook(book.id, book)
    }

  return (
      <form onSubmit={doUpdateBook}>
        <div className="form-group">
            <label>Title</label>
            <input className="form-control" type="text" name="title" value={book.title} onChange={handleInputChange} />
        </div>
        <div className="form-group">
            <label>Isbn</label>
            <input className="form-control" type="text" name="isbn" value={book.isbn} onChange={handleInputChange} />
        </div>
      <button className="btn btn-secondary">Edit Book</button>&nbsp;
      <button onClick={() => props.setEditing(false)} className="btn btn-warning">
        Cancel
      </button>
    </form>
  )
}

export default EditBookForm