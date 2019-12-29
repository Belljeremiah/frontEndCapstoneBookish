import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'; 

// Importing the ability to use Component from React, and the Link from React-router-dom for use with this card.



class BookCard extends Component {
    
    render() {
        console.log("BookCard Render", this.props.book.imageUrl)
        return (
            <>
            <Card>
                <div className="card">
                    <div className="card-content">
                        {/* Because I have passed props from the parent component for this card I can gain access to the data, I can use render to display it with a return of JSX interpolated place holders. */}
                        <h1>Book Title: <span className="book-title">{this.props.book.title}</span></h1>
                        <h3>Book Author: {this.props.book.author}</h3>
                        <h3>Book Genre: {this.props.book.genre}</h3>
                        <img src={`${this.props.book.imageUrl}`} alt={this.props.book.title} />
                        <h3>Rating: {this.props.book.rating}</h3>
                        <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={() => this.props.deleteBook(this.props.book.id)}>Delete Book</button>
                        <button type="button" className="btn btn-primary" onClick={() => {this.props.history.push(`/books/${this.props.book.id}/edit`)}}>Edit</button>
                        <Link to={`/books/${this.props.book.id}`}><button className="btn btn-primary">Book Detail View</button></Link>
                    </div>
                    </div>
                </div>
            </Card>
            </>
        );
    }
}

export default BookCard;