import React, { Component } from 'react'
//import the components we will need
import BookCard from './BookCard'
import BookManager from '../../modules/BookManager'
import "bootstrap/dist/css/bootstrap.min.css"

class BookList extends Component {
    //define what this component needs to render
    state = {
        books: [],
    }

componentDidMount(){
    console.log("BOOK LIST: ComponentDidMount");
    //getAll from BookManager and hang on to that data; put it in state
    BookManager.getAll()
    .then((booksArray) => {
        this.setState({
            books: booksArray
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


render() {
    console.log("BookList: Render");
    console.log(this.state.books)
    
    return(
        <React.Fragment>
            <section className="section-content">
                <button type="button" variant="primary" className="primary"
                onClick={() => {this.props.history.push("/books/new")}}>
                Create book
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
//   This is the old way of doing this from the first or second exercise use this as a reference for the now working code in how it needed to change.
// render(){
//     console.log("book LIST: Render");

//     return(
//         <div className="container-cards">
//             {this.state.books.map(book => <bookCard />)}
//         </div>
//     )
// }
}

export default BookList;