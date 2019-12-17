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

  handleLogin = (e) => {
    e.preventDefault()
    if ( this.state.password !== "" || this.state.email !== "") {
      UsersManager.searchPrevUser(this.state.email)
      .then((userObj) => {
        if (userObj.length === 0) {
          window.alert("YOu no have account boi/goi go to REgister!! NAWOOOW") 
        } else {
          if (this.state.password === userObj[0].password) {

            this.props.setUser(userObj[0])
            this.props.history.push("/")
          } else {
            window.alert("NO DICE your passwords BULLSHIT!")
          }
          
        }
      }
      )
    }
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */


  }

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
                    required="" autoFocus="" />
                <label htmlFor="inputEmail">Email address</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>
            <button type="submit">
                Sign in
            </button>
            <br></br>
        </fieldset>
      </form>
            <button onClick={() => this.props.history.push("/Registration")}>Register New Account</button>
            </React.Fragment>
    )
  }

}

export default Login