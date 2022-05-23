import React from "react";

const Task = (props) => {

  const  {text, date, id} = props.task
  return (
    <div className="taskClass">
      <p>
        <strong>{text}</strong> - do <span>{date}</span>
      </p>
      <div>
        <button onClick={()=>props.change(id)}>Zostało zrobione</button>
        <button onClick={()=>props.delete(id)}>X</button>
      </div>
    </div>
  )
}

export default Task;
