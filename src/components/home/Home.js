import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import booksLink from './booksLink.png';
import bookshelfstack from './bookshelfstack.png';
import diverseFriends from './diverseFriends.png';
import "bootstrap/dist/css/bootstrap.min.css" 
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="d-inline-flex flex-column bd-highlight">
            <Link to="/books"><img className="book-icon p-2 bd-highlight imageLinks col-5" src={booksLink}></img></Link>
            <Link to="/bookshelves"><img className="bookshelf-icon p-2 bd-highlight imageLinks col-5" src={bookshelfstack}></img></Link>
            <Link to="/friends"><img className="friends-icon p-2 bd-highlight w-50 imageLinks col-5" src={diverseFriends}></img></Link>
            </div>
            

            </React.Fragment>
        )
    }
}

export default Home;