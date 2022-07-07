import React from "react";

const Task = (props) => {

  const style = {
    color: 'red'
  }

  const { text, date, id, active, important, finishDate } = props.task

  if (active) {
    return (
      <div className="taskClass">
        <p>
          <strong style={important ? style : null}>{text}</strong> - do <span>{date}</span>
        </p>
        <div>
          <button onClick={() => props.change(id)}>Zostało zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </div>
      </div>
    )
  }else {

    const finish = new Date(finishDate).toLocaleString()
    return(
      <div className="taskClass">
        <p>
          <strong>{text}</strong> - do <span>(zrobić do: {date})</span>
        </p>
        <br/>
        <p>- potwierdzenie wykonania<span> {finish}</span></p>
        <div>
          <button onClick={() => props.delete(id)}>X</button>
        </div>
      </div>
    )
  }
}

export default Task;