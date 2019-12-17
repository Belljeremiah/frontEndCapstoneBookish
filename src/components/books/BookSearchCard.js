import React, { Component } from 'react';
// THis card is for feeding into bookForm so I can display my data there from my API Google Fetch Calls.

class BookSearchCard extends Component {
    
    
    
    
    
    
    
    // componentDidMount(){
    //     console.log("BookForm ComponentDidMOunt")
    //     BookManager.getAllBookShelves()
    //     .then((response) => {this.setState({
    //         bookshelf: response
    //     })
    // })
    // }
    
    
    render() {
        console.log(this.props.item.volumeInfo)
        return(
            <>
                <div className="card">
                    <div className="card-content">
                        <h1>Book Title: <span className="book-title">
                        {this.props.item.volumeInfo.title}</span></h1>
                        {/* IF you want single author vs multi authors must refactor at .authors.map and add in [] for single object from the array */}
                        
                        <h3>Book Authors:{
                        this.props.item.volumeInfo.authors.map((singleAuthor) => {
                        return(singleAuthor)
                        })}
                        </h3>
                        
                        <h3>Book Genre: {
                        this.props.item.volumeInfo.categories.map((singleCategory) => {
                            return(singleCategory)
                        })
                        }
                        </h3>

                        <h3>ImageUrl:
                        {this.props.item.volumeInfo.imageLinks.smallThumbnail}
                        </h3>
                        <h3>Rating: <span className="book-rating">
                        {this.props.item.volumeInfo.averageRating}
                        </span>
                        </h3>
                        
                        {/* <select onChange={this.handleFieldChange} id="selector">
                        <option>To be Dropdown</option>
                        {this.props.bookshelf.map((singleShelf) => {
                        return <option key={singleShelf.id} value={singleShelf.id}>{singleShelf.shelfName}</option>
                        })}
                        </select> */}
                        {/* Dropdown for each users shelves. To save on shelf and a button to submit card data without copy and paste*/}

                    </div>
                </div>
                </>
        );
    }


    
}

export default BookSearchCard;
