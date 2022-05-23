import React, { Component } from 'react'
import './App.css'
import AddTask from './AddTask'
import AddList from './AddList'
import TaskList from './TaskList'

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrac w gre',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {id: 1, text: 'kupic jedzenie', date: '2022-04-11', important: false, active: true, finishDate: null},
      {id: 2, text: 'sprzedac auto', date: '2022-03-18', important: false, active: true, finishDate: null},
      {id: 3, text: 'isc na silownie', date: '2022-02-21', important: false, active: true, finishDate: null},
      {id: 4, text: 'spotkac sie ze znajomymi', date: '2022-06-15', important: false, active: true, finishDate: null},
    ]
  }

  deleteTask = (id) =>{
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)
    this.setState({
      tasks: tasks
    })
  }

  changeTaskStatus = (id) =>{
    let tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks: tasks
    })
  }

  render() {

    return (
      <div>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
        {/* <AddList /> */}
        asd
      </div>
    )
  }
}
export default App
