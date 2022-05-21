import React, { Component } from 'react'
import './App.css'
import AddTask from './AddTask'
import AddList from './AddList'

class App extends Component {


  render() {

    return (
      <div>
        <AddTask />
        <AddList />
      </div>
    )
  }
}
export default App
