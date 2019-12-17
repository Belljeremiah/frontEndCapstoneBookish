import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
import GoogleApiManager from '../../modules/GoogleApiManager';
import BookSearchCard from '../books/BookSearchCard';

class BookForm extends Component {
    state = {
        title: "",
        author: "",
        genre: "",
        rating: "",
        loadingStatus: false,
        items:{items:[]},
    };

    handleFieldChange = e => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    };

    // bookSearch = (volume, author) => {
    // GoogleApiManager.getAll(volume, author)
    // .then(result => result.json)
    // .then(console.log(result))
    // }
    searchNewBook = e => {
        e.preventDefault();
        if (this.state.title === "" || this.state.author === "") {
            window.alert("At Least a Book Title and Author!!!");
        } else {
            this.setState({ loadingStatus: true });
            // console.log("state", this.state)
            const search = {
                volume: this.state.title,
                author: this.state.author,
    };

    GoogleApiManager.get(search.volume, search.author)
    .then(result => {
        // console.log("fetch result", result.items)
        this.setState({
            items: result
        })
        console.log(this.state.items)
        console.log(this.state.items.items.map((item) => {
            console.log(item)
        }))
    })
    
    
}
};
    /*  Local method for validation, set loadingStatus, create book, object, invoke the bookManager post method, and redirect to the full book list
    */
    constructNewBook = e => {
        e.preventDefault();
        if (this.state.title === "" || this.state.author === "" || this.state.genre === "" ) {
            window.alert("At Least a Book Title and Author!!!");
        } else {
            this.setState({ loadingStatus: true });
            const book = {
                title: this.state.title,
                author: this.state.author,
                genre: this.state.genre,
                rating: this.state.rating,
            };

            // Where the user makes a book and goes to book list
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
                        // disabled={this.state.loadingStatus}
                        onClick={this.constructNewBook}
                        >Submit</button>
                        <button
                        type="button"
                        // disabled={this.state.loadingStatus}
                        onClick={this.searchNewBook}
                        >Search</button>
                    </div>
                </fieldset>
            </form>
            <div>
                {
                  this.state.items.items.map((item, index) => {
                    if (index < 5) {
                        return <BookSearchCard
                            key={item.id}
                            item={item}
                            {...this.props}
                            />
                            
                    }
                  })
                }
                </div>
            </>
        )
    }
}

export default BookForm;