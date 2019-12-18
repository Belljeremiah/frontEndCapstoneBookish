import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
            <nav className="navbar text-white flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {(this.props.user) ?
                    <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books">Books</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/bookshelves">BookShelves</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li>
                    
                </>
                    : null }
                </ul>
                <span className="navbar-text">
                    <ul className="nav nav-pills nav-fill">
                        
                    <li className="nav-item">
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