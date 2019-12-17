import React, { Component } from 'react';
// THis card is for feeding into bookForm so I can display my data there from my API Google Fetch Calls.

class BookSearchCard extends Component {
  
    render() {
        console.log(this.props.item.volumeInfo.title)
        return(
            <>
                <div className="card">
                    <div className="card-content">
                        <h1>Book Title: <span className="book-title">
                        {this.props.item.volumeInfo.title}</span></h1>
                        {/* <h3>Book Author:
                        {this.props.item}
                        </h3>
                        <h3>Book Genre: 
                        {this.props.item}
                        </h3>
                        <h3>ImageUrl:
                        {this.props.item}
                        </h3>
                        <h3>Rating:
                        {this.props.item}
                        </h3> */}

                    </div>
                </div>
                </>
        );
    }


    
}

export default BookSearchCard;
