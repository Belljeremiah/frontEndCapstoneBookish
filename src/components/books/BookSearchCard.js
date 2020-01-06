import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
// THis card is for feeding into bookForm so I can display my data there from my API Google Fetch Calls.

class BookSearchCard extends Component {
    state = {
        loadingStatus: false,
        selector: ""
        
    }

    handleFieldChange = e => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    };

    constructNewBook = e => {
        e.preventDefault();
            this.setState({ loadingStatus: true });
            // This Id is how to get a unique Id on each item created.
            const userId = JSON.parse(localStorage.getItem("credentials"));
            const {title, authors, categories, averageRating, imageLinks}=this.props.item.volumeInfo
            const book = {
                title: title,
                author: authors[0],
                genre: categories[0],
                rating: averageRating,
                imageUrl: imageLinks.thumbnail?imageLinks.thumbnail: "",
                userId: userId.id,
                bookshelfId: Number(this.state.selector)
            };
            

            // Where the user makes a book and goes to book list
            console.log("book", book)
            BookManager.post(book)
            .then(() => this.props.history.push("/books"));
        }

    render() {
        console.log(this.props.item.volumeInfo)
        return(
            <>
                <div className="card">
                    <div className="card-content">
                        <h1
                        id="title"
                        onChange={this.handleFieldChange}>Book Title: <span className="book-title">
                        {this.props.item.volumeInfo.title}</span></h1>
                        {/* IF you want single author vs multi authors must refactor at .authors.map and add in [] for single object from the array */}
                        
                        <h3
                        id="author"
                        onChange={this.handleFieldChange}>Book Authors:{
                        this.props.item.volumeInfo.authors.map((singleAuthor) => {
                        return(singleAuthor)
                        })}
                        </h3>

                        <img
                        id="imageUrl"
                        onChange={this.handleFieldChange}
                        src={`${this.props.item.volumeInfo.imageLinks.smallThumbnail}`} />
                        
                        <h3>Rating: <span className="book-rating">
                        {this.props.item.volumeInfo.averageRating}
                        </span>
                        </h3>
                        
                        <select onChange={this.handleFieldChange} id="selector" value={this.state.selector}>
                        {this.props.bookshelf.map((singleShelf) => {
                        return <option 
                        key={singleShelf.id} 
                        value={singleShelf.id}>{singleShelf.shelfName}</option>
                        })}
                        </select>
                        {/* Dropdown for each users shelves. To save on shelf and a button to submit card data without copy and paste*/}
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewBook}
                        >Submit</button>
                        
                        

                    </div>
                </div>
                </>
        );
    }


    
}

export default BookSearchCard;
