import React, { Component } from 'react'
//import the components we will need
import BookCard from './BookCard'
import BookManager from '../../modules/BookManager'
import "bootstrap/dist/css/bootstrap.min.css"

class BookList extends Component {
    //define what this component needs to render
    state = {
        books: [],
        shelves: [],
        selector: ""
    }

componentDidMount(){
    console.log("BOOK LIST: ComponentDidMount",);
    //getAll from BookManager and hang on to that data; put it in state
    BookManager.getAll()
    .then((booksArray) => {
        this.setState({
            books: booksArray
        })
    BookManager.getAllBookShelves()
    .then((newShelves) => {
        this.setState({
            shelves: newShelves
            })
    })
    })
}

deleteBook = id => {
    BookManager.deleteBook(id)
    .then(() => {
    BookManager.getAll()
    .then((newBooks) => {
        this.setState({
            books: newBooks
        })
    })
    })
}
    

bookByShelf = shelfId => {
    BookManager.getBookByShelf(shelfId)
    .then(() => {
        console.log(shelfId)
    })
}



render() {
    console.log("BookList: Render", this.state);
    // console.log(this.state.books)
    
    return(
        <React.Fragment>
            <section className="section-content">
                <button type="button" className="btn btn-primary btn-lg"
                onClick={() => {this.props.history.push("/books/new")}}>
                Create book
                </button>
                <br></br>
                <select id="selector">
                {this.state.shelves.map((singleShelf) => {
                return <option 
                key={singleShelf.id} 
                value={singleShelf.id}>{singleShelf.shelfName}</option>
                })}
                </select>
                <br></br>
                <button type="button" className="btn btn-secondary btn-md"
                onClick={this.bookByShelf}>Display Books By Shelf</button>
                <br></br>
                <button type="button" className="btn btn-primary btn-lg"
                onClick={() => {this.props.history.push("/books/search")}}>
                Search Google Books
                </button>
            </section>
        <div className="container-cards">
        {this.state.books.map(book =>
            <BookCard 
            key={book.id} 
            book={book} 
            deleteBook={this.deleteBook}
            bookSearch={this.bookSearch}
            {...this.props}
            />
            )}
        </div>
    </React.Fragment>
    )
    }
}

export default BookList;