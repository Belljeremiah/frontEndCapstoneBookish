import React, { Component } from 'react'
import booksLink from './booksLink.png';
import bookshelfstack from './bookshelfstack.png';
import diverseFriends from './diverseFriends.png';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <img src={booksLink}></img>
            <img src={bookshelfstack}></img>
            <img src={diverseFriends}></img>

            <section>Welcome To Bookish So Far!</section>
            </React.Fragment>
        )
    }
}

export default Home;