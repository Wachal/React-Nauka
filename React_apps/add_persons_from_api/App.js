import React, { Component } from 'react'
import './App.css'
import UsersList from './UsersList'
import ButtonFetchUsers from './ButtonFetchUsers'

const API = 'https://randomuser.me/api/?results=1'

class App extends Component {

  state= {
    users: []
  }

  handleDataFetch = () =>{
    fetch(API)
    .then(res => {
      if(res.ok){
        return res
      }
      throw Error("zle")
    })
    .then(res => res.json())
    .then(data => {
      this.setState(prevState => ({
        users: prevState.users.concat(data.results)
      }))
    })
    .catch(error => console.log(error))
  }

  render() {

    const users = this.state.users
   
    return (
      <div>
        <ButtonFetchUsers button={this.handleDataFetch}/>
        {users ? <UsersList users={users} /> : users}
      </div>
    )
  }
}

export default App
