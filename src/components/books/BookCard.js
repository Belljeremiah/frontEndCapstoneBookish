import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importing the ability to use Component from React, and the Link from React-router-dom for use with this card.



class BookCard extends Component {
    
    render() {
        console.log(this.props.book.id)
        return (
            <>
                <div className="card">
                    <div className="card-content">
                        {/* Because I have passed props from the parent component for this card I can gain access to the data, I can use render to display it with a return of JSX interpolated place holders. */}
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