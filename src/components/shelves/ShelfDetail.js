import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import BookManager from '../../modules/BookManager'

class ShelfDetail extends Component {
    state = {
        shelfName: "",
        genre: "",
    }

    componentDidMount(){
        console.log("Shelf Detail: ComponentDidMOunt");

    BookManager.get(this.props.bookshelfId)
    .then((shelf) => {
        this.setState({
            shelfName: shelf.title,
            genre: shelf.genre,
            loadingStatus: false
        });
    });
    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        BookManager.deleteShelf(this.props.shelfId)
        .then(() => this.props.history.push("/books"))
}

    render() {
        return (
            <div className="card">
        <div className="card-content">
            <h1>Book Title: <span className="book-title">{this.state.title}</span></h1>
                <h3>Book Author: {this.state.author}</h3>
                <h3>Book Genre: {this.state.genre}</h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Book</button>
        </div>
      </div>
        );
    }
}

export default ShelfDetail;