import React from 'react'

const Books = props => (
    <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>ISBN</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                props.books.length > 0 ?
                    (
                        props.books.map(book => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.isbn}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={()=> props.editBook(book)}>Edit</button>
                                    &nbsp;
                                    <button className="btn btn-danger" onClick={() => props.deleteBook(book.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )
                    : (
                        <tr>
                            <td colSpan={3}>No books</td>
                        </tr>
                    )
            }
        </tbody>
    </table>
)

export default Books