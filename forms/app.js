class Form extends React.Component {
  

  render() {
    return (
      <form>
        <label>
          Podaj imię:
          <input type="text" name="name"/>
        </label>
      <br/>
      <label>
        Podaj mail:
        <input type="email" name="email"/>
      </label>
      <br/>
      <button>zapiszzz się</button>
      </form>

    )
  }
}


ReactDOM.render(<Form />, document.getElementById('root'))
