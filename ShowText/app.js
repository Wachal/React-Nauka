class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      messageIsActive: false
    }
  }

  handleClick =()=>{
    this.setState ({
      messageIsActive: !this.state.messageIsActive
    }) 
  }


  
  
  
  render() {

    const text = "Lorem sadasdasdas"
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{this.state.messageIsActive? "pokaz" : "ukryj"}</button>
        <p>{text}</p>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))