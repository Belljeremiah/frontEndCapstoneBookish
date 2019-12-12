import React, { Component } from 'react'
import Home from './home/Home'
import Registration from './auth/Registration'
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
                    return <Books />
                }} />

                <Route exact path="/shelves" render={(props) => {
                    return <Shelves />
                }} />

                <Route exact path="/registration" render={(props) => {
                    return <Registration {...props} />
                }} />

            </React.Fragment>
        )
}}

export default ApplicationViews;