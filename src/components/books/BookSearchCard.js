import React, { Component } from 'react';
// THis card is for feeding into bookForm so I can display my data there from my API Google Fetch Calls.

class BookSearchCard extends Component {
  
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

                    </div>
                </div>
                </>
        );
    }


    
}

export default BookSearchCard;
