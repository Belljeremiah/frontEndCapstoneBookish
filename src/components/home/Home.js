import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import booksLink from './booksLink.png';
import bookshelfstack from './bookshelfstack.png';
// import diverseFriends from './diverseFriends.png';
import "bootstrap/dist/css/bootstrap.min.css" 
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="d-flex justify-content-center">Welcome To Bookish Click a Link to Begin</h1>
                <div className="imagelink-container d-flex align-content-center flex-wrap">
            <div className="d-inline-flex flex-column bd-highlight">
            <Link to="/books"><img className="book-icon p-2 bd-highlight imageLinks col-5" src={booksLink}></img></Link>
            <h3 className="align-self-baseline">Books</h3>
            <Link to="/bookshelves"><img className="bookshelf-icon p-2 bd-highlight imageLinks col-5" src={bookshelfstack}></img></Link>
            <h3 className="align-self-baseline">BookShelves</h3>
            {/* <Link to="/friends"><img className="friends-icon p-2 bd-highlight w-50 imageLinks col-5" src={diverseFriends}></img></Link> */}
            </div>
            </div>
            

            </React.Fragment>
        )
    }
}

export default Home;