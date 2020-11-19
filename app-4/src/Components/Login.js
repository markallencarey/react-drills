import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      passwordInput: '',
      alertMessage: ''
    }
  }

  handleChangeUser(val) {
    this.setState({ userInput: val })
  }

  handleChangePassword(val) {
    this.setState({ passwordInput: val })
  }

  alertUser(userInput, passwordInput) {
    alert('Username: ' + userInput + ' ' + 'Password: ' + passwordInput)
  }

  render() {
    return (
      <div>
        <input
          placeholder='username'
          onChange={(e) => this.handleChangeUser(e.target.value)} />
        <input placeholder='password'
          onChange={(e) => this.handleChangePassword(e.target.value)} />
        <button onClick={() => this.alertUser(this.state.userInput, this.state.passwordInput)}>Login</button>
      </div>
    )
  }
}

export default Login