import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
import GoogleApiManager from '../../modules/GoogleApiManager'; 
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

//     searchNewBook = e => {
//         e.preventDefault();
//         if (this.state.title === "" || this.state.author === "") {
//             window.alert("At Least a Book Title and Author!!!");
//         } else {
//             this.setState({ loadingStatus: true });
//             // console.log("state", this.state)
//             const search = {
//                 volume: this.state.title,
//                 author: this.state.author,
//     };

//     GoogleApiManager.get(search.volume, search.author)
//     .then(result => {
//         // console.log("fetch result", result.items)
//         this.setState({
//             items: result
//         })
//         console.log(this.state.items)
//         console.log(this.state.items.items.map((item) => {
//             console.log(item)
//         }))
//     })
    
    
// }
// };
//     /*  Local method for validation, set loadingStatus, create book, object, invoke the bookManager post method, and redirect to the full book list
//     */
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
    
    
//     componentDidMount(){
//         console.log("BookForm ComponentDidMOunt")
//         BookManager.getAllBookShelves()
//         .then((response) => {this.setState({
//             bookshelf: response
//         })
//     })
//     }
    
    
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
                        
                        <h3
                        id="genre"
                        onChange={this.handleFieldChange}>Book Genre: {
                        this.props.item.volumeInfo.categories.map((singleCategory) => {
                            return(singleCategory)
                        })
                        }
                        </h3>

                        <h3
                        id="imageUrl"
                        onChange={this.handleFieldChange}>ImageUrl:
                        {this.props.item.volumeInfo.imageLinks.smallThumbnail}
                        </h3>
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
