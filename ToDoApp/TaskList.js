import React from "react";
import Task from './Task';

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active)
  const done = props.tasks.filter(task => !task.active)
  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

  return (
    <div>
      <div className="active">
        <h1> zadania do zrobienia</h1>
        {activeTasks.length ? activeTasks : <p>brak zadan do zrobienia</p>}
      </div>
      <div className="active">
        <h3> zadania zrobione <em>{done.length}</em></h3>
        {done.length>4 && 
        <span>wyświetlonych jest 5 ostatnich zadań</span>}
        {doneTasks.slice(0, 5)}
      </div>
    </div>
  )
}

export default TaskList
