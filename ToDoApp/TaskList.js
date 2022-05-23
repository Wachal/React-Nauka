import React from "react";
import Task from './Task';

const TaskList = (props) => {

  const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
  return (
    <div>
      <div className="active">
        <h1> zadania do zrobienia</h1>
        {tasks}
      </div>
      <div className="active">
        <h3> zadania zrobione (0)</h3>
      </div>
    </div>
  )
}

export default TaskList
