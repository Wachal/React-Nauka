import React from "react";

const Form = (props) => (
  <form onSubmit={props.submit}>
    <input 
      value={props.value} 
      placeholder="podaj miasto"
      type="text"
      onChange={props.change}
    />
  </form>
)

export default Form
