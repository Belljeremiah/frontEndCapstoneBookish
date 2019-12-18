import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';

// Declaring a class/object with the ability to use Component Methods from React
class BookDetail extends Component {
// Setting State which is the state of the app in its current use. So this is setting state for BookDetail the class I declared earlier so when I need to set Props for the BookCard I can do that here.
  state = {
      title: "",
      author: "",
      genre: "",
      rating: "",
      imageUrl: "",
      loadingStatus: true
  }

  // This is a method that runs to load data from a remote endpoint in the json. in this case book/id then I set the state to have the same keys and value pairs from json server as well.
  componentDidMount(){
    console.log("BookDetail: ComponentDidMount");
    //get(id) from BookManager and hang on to the data; put it into state
    // This gathers that id from my API manager in the modules section.
    BookManager.get(this.props.bookId)
    .then((book) => {
      this.setState({
        title: book.title,
        author: book.author,
        genre: book.genre,
        rating: book.rating,
        imageUrl: book.imageUrl,
        loadingStatus: false
      });
    });
  }
  
  // This resets state to invoke the delete method written from BookManager and invokes loadingstatus to allow for a pause for data to collate and impede users from hitting delete before it is fully loades as an object on the dom
  handleDelete = () => {
    //invoke the delete function in BookManger and re-direct to the Book list.
    this.setState({loadingStatus: true})
    BookManager.deleteBook(this.props.bookId)
    .then(() => this.props.history.push("/books"))
}
  // This is what is invoked after this BookDetail is ran and is the path for the Route to follow and render to the DOM it is being fed the props state from the previous function.
  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h1>Book Title: <span className="book-title">{this.state.title}</span></h1>
                <h3>Book Author: {this.state.author}</h3>
                <h3>Book Genre: {this.state.genre}</h3>
                <h3>ImageUrl: {this.state.imageUrl}</h3>
                <h3>Rating: {this.state.rating}</h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Book</button>
        </div>
      </div>
    );
  }
}
// Generic export allowing this module to be imported with any statement identifier
export default BookDetail;