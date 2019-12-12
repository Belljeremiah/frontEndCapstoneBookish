import { Component } from 'react'
// Above is where I import my components, including the ability to extend Component from React in the form of Class Names.


class ApplicationViews extends Component {
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
                    return <Registration />
                }} />

            </React.Fragment>
        )
}}