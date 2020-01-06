import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Home from './home/Home'
import Registration from './auth/Registration'
import Login from './auth/Login'
import BookForm from './books/BookForm'
import BookList from './books/BookList'
import BookDetail from './books/BookDetail'
import BookEditForm from './books/BookEditForm'
import BookSearchForm from './books/BookSearchForm'
import ShelfForm from '../components/shelves/ShelfForm'
import ShelfList from '../components/shelves/ShelfList'
import ShelfDetail from '../components/shelves/ShelfDetail'
import ShelfEditForm from '../components/shelves/ShelfEditForm'
// Above is where I import my components, including the ability to extend Component from React in the form of Class Names.


class ApplicationViews extends Component {
    // isAuthenticated = () => localStorage.getItem("credentials") !== null
    
    render() {
        return (
            <React.Fragment>
                {/* Setting Route Paths for Render for each display page */}
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                <Route exact path="/books" render={(props) => {
                    return <BookList shelfId={parseInt(props.match.params.shelfId)}
                    {...props}/>
                }} />

                <Route exact path="/books/:bookId(\d+)" render={(props) => {
                return <BookDetail bookId={parseInt(props.match.params.bookId)} 
                // THis is a spread operator that seperates out all the key values in the object and sets them all as props. Includes History and match we want history for history.push router property.
                {...props}
                />
                }} />

                <Route
                path="/books/:bookId(\d+)/edit" render={props => {
                return <BookEditForm {...props} />
                }}
                />

                <Route path="/books/new" render={(props) => {
                return <BookForm {...props} />
                }} />

                <Route path="/books/search" render={(props) => {
                return <BookSearchForm {...props} />
                }} />
                

                <Route exact path="/bookshelves" render={(props) => {
                    return <ShelfList {...props}/>
                }} />

                <Route exact path="/bookshelves/:shelfId(\d+)" render={(props) => {
                return <ShelfDetail shelfId={parseInt(props.match.params.shelfId)}
                {...props}
                />
                }} />

                <Route
                path="/bookshelves/:shelfId(\d+)/edit" render={props => {
                return <ShelfEditForm {...props} />
                }}
                />

                <Route path="/bookshelves/new" render={(props) => {
                return <ShelfForm {...props} />
                }} />

                <Route exact path="/registration" render={(props) => {
                    return <Registration setUser={this.props.setUser} {...props} />
                }} />

                
                <Route exact path="/login" render={(props) => {
                    return <Login setUser={this.props.setUser} {...props} />
                }} />

                

            </React.Fragment>
        )
}}

export default ApplicationViews;