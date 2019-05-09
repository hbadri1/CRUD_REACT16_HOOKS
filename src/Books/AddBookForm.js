import React, {useState} from 'react'


const AddBookForm = props => {
    
    const initialBookState = { id: null, title: '', isbn: '' }
    const [book, setBook] = useState(initialBookState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setBook({ ...book, [name]: value })
    }
    
    const doCreateNewBook = event => {
        event.preventDefault()
        if (book.title && book.isbn) {
            props.addBook(book)
            setBook(initialBookState)
        }
    }

    return (
        <form onSubmit={doCreateNewBook}>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control" type="text" name="title" value={book.title} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label>Available</label>
                <input className="form-control" type="text" name="isbn" value={book.isbn} onChange={handleInputChange} />
            </div>
            <button className="btn btn-secondary">Add new book</button>
        </form>
    )
}
export default AddBookForm