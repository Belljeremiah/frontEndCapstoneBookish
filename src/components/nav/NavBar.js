import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import bookIconRound2 from "../nav/bookIconRound2.png"


class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
            <nav className="p-2 navbar navbar-dark bg-dark nav-fill">
                <ul className="nav nav-pills nav-fill">
                <img src={bookIconRound2.png}></img>
                    {(this.props.user) ?
                        <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books">Books</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/bookshelves">BookShelves</Link>
                    </li>
                    
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li> */}
                    
                </>
                    : null }
                </ul>
                <span className="navbar-item">
                    <ul className="nav nav-pills nav-fill">
                        
                    <li className="d-inline-flex p-2 nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                        
                    
                    </ul>
                </span>
            </nav>
            </React.Fragment>
        )
    }
}

export default NavBar