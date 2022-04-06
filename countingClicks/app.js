class App extends React.Component {

  state = {
    count: 0,
    result: 0
  }

  subtract = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      result: prevState.result - 1
    }))
  }

  increase = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      result: prevState.result + 1
    }))
  }

  reset = () =>{
    this.setState(prevState=>({
      count: 0,
      result: 0
    }))
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.subtract}>-1</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.increase}>+1</button>
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h2>Wynik: {this.state.result}</h2>
      </React.Fragment>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))