import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class BookCard extends Component {
    
    render() {
        console.log(this.props.book.id)
        return (
            <>
                <div className="card">
                    <div className="card-content">
                            {/* <img alt="goes here" />  */}
                        <h1>Book Title: <span className="book-title">{this.props.book.title}</span></h1>
                        <h3>Book Author: {this.props.book.author}</h3>
                        <h3>Book Genre: {this.props.book.genre}</h3>
                        <h3>ImageUrl</h3>
                        <h3>Rating: {this.props.book.rating}</h3>
                        <button type="button" onClick={() => this.props.deleteBook(this.props.book.id)}>Delete Book</button>
                        <button type="button" onClick={() => {this.props.history.push(`/books/${this.props.book.id}/edit`)}}>Edit</button>
                        <Link to={`/books/${this.props.book.id}`}><button>Book Detail View</button></Link>
                    </div>
                </div>
            </>
        );
    }
}

export default BookCard;