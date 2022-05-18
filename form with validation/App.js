import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state = {
    username: '',
    email: '',
    pass: '',
    accept: false,

    errors: {
      username: true,
      email: true,
      pass: true,
      accept: true
    }
  }

  messages = {
    username_incorrect: "Nazwa musi byc dłuższa niż 10 znaów i nie może zawierac spacji",
    email_incorrect: "brak @ w emailu",
    password_incorrect: "Hasło musi mieć 8 znaów",
    accept_incorrect: "niepotwierdzona zgoda"
  }

  handleChange = (e) => {
    const name = e.target.name
    const type = e.target.type

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value

      this.setState({
        [name]: value
      })
    } else if (type === "checkbox") {
      const checked = e.target.checked
      this.setState({
        [name]: checked
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    const validation = this.formValidation()

    if (validation.correct) {
      this.setState({
        username: '',
        email: '',
        pass: '',
        accept: false,

        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false
        }
      })
    }else{
      this.setState({
        errors: {
          username: !validation.name,
          email: !validation.email,
          pass: !validation.pass,
          accept: !validation.accept
        }
      })
    }
  }

  formValidation = () =>{
    let username = false
    let email = false
    let password = false
    let accept = false
    let correct = false

    if(this.state.username.length > 10 && this.state.username.indexOf((' ') === -1)){
      username = true
    }

    if(this.state.email.indexOf(('@') !== -1)){
      email = true
    }

    if(this.state.password.length > 8){
      password = true
    }

    if(this.state.accept){
      accept = true
    }

    if(username && email && password && accept){
      correct = true
    }

    return({
      correct,
      password,
      email,
      accept
    })
  }

  render() {

    const { username, email, pass, accept } = this.state
    const { username_incorrect, password_incorrect, email_incorrect, accept_incorrect } = this.messages
    return (
      <form className="form" noValidate onClick={this.handleSubmit}>
        <label htmlFor="user">Twoje imię:
          <input
            type="text"
            id="user"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          {this.state.errors.username && <span>{username_incorrect}</span>}
        </label>
        <br />
        <label htmlFor="email">Twój email:
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          {this.state.errors.email && <span>{email_incorrect}</span>}
        </label>
        <br />
        <label htmlFor="password">Twoje hasło:
          <input
            type="password"
            id="password"
            name="pass"
            value={pass}
            onChange={this.handleChange}
          />
          {this.state.errors.pass && <span>{password_incorrect}</span>}
        </label>
        <br />
        <label htmlFor="accept">
          <input
            type="checkbox"
            id='accept'
            name='accept'
            checked={accept}
            onChange={this.handleChange}
          />Wyrażam zgodę na coś tam
        </label>
        <br />
        {this.state.errors.accept && <span>{accept_incorrect}</span>}
        <br />
        <button type="submit">zapisz sie</button>
      </form>
    )
  }
}
export default App
