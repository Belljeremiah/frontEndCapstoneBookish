import React, { Component } from 'react';





class BookCard extends Component {
    
    render() {
        
        return (
            <>
                <div className="card">
                    <div className="card-content">
                            {/* <img alt="goes here" />  */}
                        <h1>Book Title: <span className="book-title">{this.props.books.title}</span></h1>
                        <h3>Book Author: {this.props.book.author}</h3>
                        <h3>Book Genre: {this.props.book.genre}</h3>
                        <h3>ImageUrl</h3>
                        <h3>Rating: {this.props.book.rating}</h3>
                    </div>
                </div>
            </>
        )
    }
}

export default BookCard;