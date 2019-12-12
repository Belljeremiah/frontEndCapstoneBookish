import React, { Component } from 'react'
import { read } from 'fs'

class Registration extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    
    registrationFieldChange = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    handleRegistrationSubmit = (e) => {
        event.preventDefault()
        if ( this.state.password === this.state.confirmPassword ) {
            localStorage.setItem(
                "credentials",
                JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassowrd: this.state.confirmPassword
                })
            )
            this.props.setUser({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            })
    this.props.history.push("/users");
        } else {
            window.alert("Hey match your fields, don't cross your streams!")
        }
        }
        render() {
            return (
                <React.Fragment>
                <form onSubmit={this.handleRegistrationSubmit}>
                    <fieldset>
                    <div className="formgrid">
                        <label htmlFor="inputUsername">Username</label>
                        <input onChange={this.handleRegistrationSubmit} 
                    type="username"
                    id="username"
                    placeholder="Username"
                    required="" autoFocus="" />

                        <label htmlFor="inputEmail">Email Address</label>
                        <input onChange={this.handleRegistrationSubmit}        type="email"
                    id="email"
                    placeholder="Email Address"
                    required="" autoFocus="" />

                    <label htmlFor="inputPassword">Password</label>
                    <input onChange={this.handleRegistrationSubmit} type="password"
                    id="password"
                    placeholder="Password"
                    required="" autoFocus="" />

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onChange={this.signUpFieldChange} type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    required autoFocus="" />
                    </div>
                    <button id="register-button" className="button" type="submit">Submit Registration</button>
                    </fieldset>
                </form>
                </React.Fragment>
            )
        }
    }

    export default Registration;