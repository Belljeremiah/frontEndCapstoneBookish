import React, { Component } from 'react'
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
import UsersManager from '../modules/UsersManager';

class Bookish extends Component {
    state ={
        user: false,
        users: []
    }

isRegistered = () => localStorage.getItem("credentials") !==null

setUser = (registerObj) => {
    localStorage.setItem("credentials", JSON.stringify(registerObj))
    this.setState({
        user: this.isRegistered()
    });

// UsersManager.post(registerObj)
// .then(newUser => {
//     console.log("newUser", newUser)
//     localStorage.setItem(
//         "credentials",
//         JSON.stringify(newUser)
//     )
//     this.setState({users: newUser})})
}

componentDidMount(){
    this.setState({
        user: this.isRegistered()
});

UsersManager.getAllUsers()
    .then(users => this.setState({users: users}))
}

render() {
        return (
            <React.Fragment>
                <NavBar
                user={this.state.user} />
                <ApplicationViews
                user={this.state.user}
                setUser={this.setUser} 
                />
            </React.Fragment>
        );
    }
}

export default Bookish;