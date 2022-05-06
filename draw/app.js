class Random extends React.Component {

  state = {
    text: "",
    newText: ""
  }

  draws = [
    {
      id: 0,
      text: "zjedz kanapke",
    },
    {
      id: 1,
      text: "zjedz jablko",
    },
    {
      id: 2,
      text: "zjedz pierogi",
    },
    {
      id: 3,
      text: "zjedz kurczaka",
    },
  ]

  handleDraw = () => {
    const number = Math.floor(Math.random() * this.draws.length)

    const text = this.draws.map(draw => {
      if (number === draw.id) return draw.text
    })

    this.setState({
      text: text
    })
  }

  handleNewText = (e) =>{
    this.setState({
      newText: e.target.value
    })
  }

  handleAddDraw = () =>{
    const newObj = {
      id: this.draws.length,
      text: this.state.newText
    }
    this.draws.push(newObj)
    alert(`dodano nowy los: ${newObj.text}`)
  }

  render() {

    return (
      <React.Fragment>
        <button onClick={this.handleDraw}>losuj</button>
        <br/>
        <p>Podaj swoj text</p>
        <input type="text" value={this.state.newText} onChange={this.handleNewText}></input>
        <button onClick={this.handleAddDraw}>Dodaj</button>
        <h1>{this.state.text}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Random />, document.getElementById('root'))
