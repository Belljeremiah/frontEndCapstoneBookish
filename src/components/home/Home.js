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
            <section><h1>Welcome To Bookish So Far!</h1></section>
            <div className="image-container d-flex flex-row align-items-center flex-grow-1">
                <div className="d-flex min-vw-25 min-vh-25 flex-row justify-content-around">
            <Link to="/books"><img className="book-icon imageLinks col-5" src={booksLink}></img></Link>
            <Link to="/bookshelves"><img className="bookshelf-icon imageLinks col-5" src={bookshelfstack}></img></Link>
            <Link to="/friends"><img className="friends-icon imageLinks" src={diverseFriends}></img></Link>
                </div>
            </div>
            

            </React.Fragment>
        )
    }
}

export default Home;