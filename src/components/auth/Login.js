import React, { Component } from "react"
import UsersManager from "../../modules/UsersManager"

class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (e) => {
    const stateToChange = {}
    stateToChange[e.target.id] = e.target.value
    this.setState(stateToChange)
  }

  // Function for handling login if else statements to check against empty entries and alerts to tell user to fill them in
  handleLogin = (e) => {
    e.preventDefault()
    if ( this.state.password !== "" || this.state.email !== "") {
      // calling my manager and using fetch call to check for previous user and ensure they are able to login instead of using a fake account. Also an alert set to tell them to go to register instead.
      UsersManager.searchPrevUser(this.state.email)
      // Passing the Object from previous call the email and checking the objects length to ensure an entry is in there. If it returns a length of 0 then the alert fires to tell them to go to register.
      .then((userObj) => {
        if (userObj.length === 0) {
          window.alert("YOu no have account boi/goi/?oi go to REgister!! NAWOOOW") 
        } else {
          if (this.state.password === userObj[0].password) {
            this.props.setUser(userObj[0])
            this.props.history.push("/")
          } else {
            window.alert("NO DICE your passwords a fake!")
          }
        }
      })
    }
  }
// Basic render for displaying Login on the DOM with my input fields and basic info in elements within JSX.
  render() {
    return (
      <React.Fragment>
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required autoFocus />
                <label htmlFor="inputEmail">Email address</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required />
                <label htmlFor="inputPassword">Password</label>
            </div>
                <button type="submit">
                    Sign in
                </button>
        </fieldset>
      </form>
            <button onClick={() => this.props.history.push("/Registration")}>Register New Account</button>
            </React.Fragment>
    )
  }

}

export default Login;