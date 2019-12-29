import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import booksLink from './booksLink.png';
import bookshelfstack from './bookshelfstack.png';
import diverseFriends from './diverseFriends.png';
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <section><h1>Welcome To Bookish So Far!</h1></section>
            <div className="image-container">
                <div className="row justify-content-center">
            <Link to="/books"><img className="imageLinks col-5" src={booksLink}></img></Link>
            <Link to="/bookshelves"><img className="imageLinks col-5" src={bookshelfstack}></img></Link>
                </div>
                <div className="row justify-content-center">
            <Link><img className="imageLinks" src={diverseFriends}></img></Link>
            </div>
            </div>
            

            </React.Fragment>
        )
    }
}

export default Home;