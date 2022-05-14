import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state= {
    username: '',
    email: '',
    pass: ''
  }

  handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <form>
        <label htmlFor="user">Twoje imię: 
          <input 
            type="text" 
            id="user" 
            name="username" 
            value={this.state.username}
            onChange={this.handleChange}
          /> 
        </label>
        <br/>
        <label htmlFor="email">Twój adres email: 
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={this.state.email}
            onChange={this.handleChange}
          /> 
        </label>
        <br/>
        <label htmlFor="password">Twoje hasło: 
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={this.state.pass}
            onChange={this.handleChange}
          /> 
        </label>
      </form>
    )
  }
}
export default App
