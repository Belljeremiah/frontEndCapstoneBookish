import React, { Component } from "react"
import BookManager from "../../modules/BookManager"


class BookEditForm extends Component {
    //set the initial state
    state = {
        title: "",
        author: "",
        genre: "",
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
            genre: this.state.genre,
            rating: this.state.rating,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                value={this.state.title}
              />
              <label htmlFor="title">Title</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="author"
                value={this.state.author}
              />
              <label htmlFor="author">author</label>
            </div>

            <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="genre"
                value={this.state.genre}
              />
              <label htmlFor="genre">genre</label>
            
            <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="rating"
                value={this.state.rating}
              />
              <label htmlFor="rating">rating</label>
            
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingBook}
                className="btn btn-primary"
              >Save</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default BookEditForm;