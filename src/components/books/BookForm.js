import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';


class BookForm extends Component {
    state = {
        title: "",
        author: "",
        genre: "",
        rating: "",
        loadingStatus: false,
    };

    handleFieldChange = e => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create book, object, invoke the bookManager post method, and redirect to the full book list
    */
    constructNewBook = e => {
        e.preventDefault();
        if (this.state.title === "" || this.state.author === "" || this.state.genre === "" ) {
            window.alert("Please input an book name and author");
        } else {
            this.setState({ loadingStatus: true });
            const book = {
                title: this.state.title,
                author: this.state.author,
                genre: this.state.genre,
                rating: this.state.rating,
            };

            // Create the book and redirect user to book list
            BookManager.post(book)
            .then(() => this.props.history.push("/books"));
        }
    };

    render(){
console.log(this.state.author)
console.log("Book Form Firing")
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Title"
                        />
                        <label htmlFor="title">Title</label>
                        
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="author"
                        placeholder="Author"
                        />
                        <label htmlFor="author">Author</label>
                        
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="genre"
                        placeholder="Genre"
                        />
                        <label htmlFor="genre">Genre</label>
                        
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="rating"
                        placeholder="Rating"
                        />
                        <label htmlFor="rating">Rating</label>
                    
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewBook}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default BookForm;