import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import BookManager from '../../modules/BookManager'

class ShelfDetail extends Component {
    state = {
        shelfName: "",
        genre: "",
        loadingStatus: true,
    }

    componentDidMount(){
        console.log("Shelf Detail: ComponentDidMOunt");

    BookManager.getAllBookShelves(Number(this.props.match.params.shelfId))
    .then((shelf) => {
        this.setState({
            shelfName: shelf[0].shelfName,
            genre: shelf[0].genre,
            loadingStatus: false
        });
    });
    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        const userId = JSON.parse(localStorage.getItem("credentials"));
        BookManager.deleteShelf(this.props.match.params.shelfId)
        .then(() => this.props.history.push("/bookshelves"))
}

    render() {
        console.log(this.state)
        return (
            <div className="card">
        <div className="card-content">
            <h2>Name: <span className="shelf-name">{this.state.shelfName}</span></h2>
            <h3>Genre: {this.state.genre}</h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Shelf</button>
        </div>
      </div>
        );
    }
}

export default ShelfDetail;