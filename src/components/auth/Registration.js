import React, { Component } from 'react'
import UsersManager from '../../modules/UsersManager'
// Setting State equal to empty strings.
class Registration extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
// Function setup for me to use when field changes. Just felt like renaming it. Instead of using the generic over and over.
    registrationFieldChange = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }
// Function for handling the button once the user hits submit. Also uses the UsersManager.searchPrevUser to ensure that they are do not already have an account.
    handleRegistrationSubmit = (e) => {
        // this stops the button from being utilized until its ready. The if statements are comparing password to confirmPassword field so that it won't run with an error in the field. Implement Regex later if possible on input fields.
        e.preventDefault()
        if ( this.state.password === this.state.confirmPassword ) {
            UsersManager.searchPrevUser(this.state.email)
            .then((response) => {
                if (response.length === 0) {
                    // Setting state after firing the button, changing loadingStatus to ensure button functionality.
                    this.setState({loadingStatus:true})
                    const userIdObject = {
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password,
                        
                    }
                    // Posting the new User to the Database.json in users object. newUser isn't called directly but is a good place holder. for reference to my actual fetch call on manager.
                    UsersManager.post(userIdObject)
                    .then((newUser) => {
                        UsersManager.searchPrevUser(this.state.email)
                        .then((response) => {
                            this.props.setUser(response[0])
                            // redirecting to home with push after function fires.
                            this.props.history.push("/");
                        })

                    })
                } else { window.alert("You already have an account Go to Sign in HOmunculous!")

                }
            })
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
                        <input onChange={this.registrationFieldChange} 
                        type="username"
                        id="username"
                        placeholder="Username"
                        required="" autoFocus="" />

                        <label htmlFor="inputEmail">Email Address</label>
                        <input onChange={this.registrationFieldChange} type="email"
                        id="email"
                        placeholder="Email Address"
                        required="" autoFocus="" />

                        <label htmlFor="inputPassword">Password</label>
                        <input onChange={this.registrationFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" autoFocus="" />
                        {/* required? autofocus? */}
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input onChange={this.registrationFieldChange} type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        required="" autoFocus="" />
                        </div>
                        <button id="register-button" className="button" type="submit">Submit Registration</button>
                        </fieldset>
                    </form>
                    </React.Fragment>
            )
        }
    }

    export default Registration;