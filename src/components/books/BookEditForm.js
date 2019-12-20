import React, { Component } from "react"
import BookManager from "../../modules/BookManager"
import { Card } from 'react-bootstrap'

class BookEditForm extends Component {
    //set the initial state
    state = {
        title: "",
        author: "",
        genre: "",
        imageUrl: "",
        rating: "",
        loadingStatus: true,
    };
    // function setup to be used to set target id and value to change state instantly and update as it is changed in the fields. Made possible by having the same id and value names.
    handleFieldChange = e => {
      const stateToChange = {}
      stateToChange[e.target.id] = e.target.value
      this.setState(stateToChange)
    }
// Function for updating book when the button fires for submitting the changes by setting state to match.
    updateExistingBook = e => {
      e.preventDefault()
      this.setState({ loadingStatus: true });
      // passing in the user Id. by grabbing it from credentials object in localStorage. Allows the passing vs match.params
      const userId = JSON.parse(localStorage.getItem("credentials"));
      const editedBook = {
        id: this.props.match.params.bookId,
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        imageUrl: this.state.imageUrl,
        rating: this.state.rating,
        loadingStatus: false,
        userId: userId.id
      };

      BookManager.update(editedBook)
      .then(() => this.props.history.push("/books"))
    }

    componentDidMount() {
      console.log("BookEdit ComponentDidMount")
      BookManager.get(this.props.match.params.bookId)
      .then(book => {
          this.setState({
            title: book.title,
            author: book.author,
            genre: book.genre,
            imageUrl: book.imageUrl,
            rating: book.rating,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <Card>
        <form>
          <fieldset>
            <div className="formgrid">
              
              <label htmlFor="title">Title</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                value={this.state.title}
              />

              <label htmlFor="author">Author</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="author"
                value={this.state.author}
              />
            </div>

            <label htmlFor="genre">Genre</label>
            <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="genre"
                value={this.state.genre}
              />

            <label htmlFor="imageUrl">ImageUrl</label>
            <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="imageUrl"
                value={this.state.imageUrl}
              />
            
            <label htmlFor="rating">Rating</label>
            <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="rating"
                value={this.state.rating}
              />
            
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingBook}
                className="btn btn-primary btn-lg"
              >Save</button>
            </div>
          </fieldset>
        </form>
        </Card>
        </>
      );
    }
}

export default BookEditForm;