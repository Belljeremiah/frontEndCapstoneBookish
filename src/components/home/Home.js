import React, { Component } from 'react'
import booksLink from './booksLink.png';
import bookshelfstack from './bookshelfstack.png';
import diverseFriends from './diverseFriends.png';
import "./Home.css"
class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="image-container">
                <div className="row justify-content-center">
            <img className="imageLinks col-5" src={booksLink}></img>
            <img className="imageLinks col-5" src={bookshelfstack}></img>
                </div>
                <div className="row justify-content-center">
            <img className="imageLinks" src={diverseFriends}></img>
            </div>
            </div>
            

            <section>Welcome To Bookish So Far!</section>
            </React.Fragment>
        )
    }
}

export default Home;