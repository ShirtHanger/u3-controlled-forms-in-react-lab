import { useState } from 'react';

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

      const [newBook, setNewBook] = useState({
        title: '',
        author: '',
      })

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}> {/* Prevents default behavior, the page refresh */}
                    <label htmlFor="title">Title: </label>
                        <input
                            id="title"
                            name="title"
                            value={newBook.title} 
                            onChange={handleInputChange}
                            />
                    <label htmlFor="author">Author: </label>
                            <input
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                            />
                    <button type='submit'>Submit a book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {/* Book cards will display here */}
                {books.map((book, index) => (
                    <div className="bookCard" key={index}>
                        <h4>{book.title}</h4> 
                        <p>({book.author})</p>
                    </div>
                ))}
            </div>
        </div>
    )

    function handleInputChange(event) {
        // This was incredibly difficult for me to understand, but I know what it does
        // Targets specific key in "New Book" object using the id and name of input fields to update the object in real time
        setNewBook(
            {... newBook, [event.target.name]: event.target.value}
        )
    }

    function handleSubmit(event) {
        // Prevents reload
        event.preventDefault()
        // Updates Array of book objects with new book at the end
        let updatedBooks = [... books, newBook]
        setBooks(updatedBooks)
        // Empty the input fiel  
        setNewBook({
            title: '',
            author: ''
        })
    }
}

export default Bookshelf