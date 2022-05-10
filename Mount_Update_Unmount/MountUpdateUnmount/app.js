class App extends React.Component {

  state = {
    status: true
  }

    componentDidMount(){
      console.log('zamonotwanie')
    }

    componentDidUpdate(){
      console.log('update')
    }
  
  render() {
    return(
    <div>
      <button onClick={()=>this.setState({status: !this.state.status})}>przełącz</button>
      <Child1 status={this.state.status} />
     {this.state.status && <Child2/>}
    </div>  

    )
  }
}

class Child1 extends React.Component{

  componentDidMount(){
    console.log('child1 zamonotwanie')
  }

  componentDidUpdate(){
    console.log('child1 update')
  }

  render(){
    return(
      <div>{String(this.props.status)}</div>
    )
  }
}

class Child2 extends React.Component{

  componentDidMount(){
    console.log('child2 zamonotwanie')
  }

  componentDidUpdate(){
    console.log('child2 update')
  }

  componentWillUnmount(){
    console.log('child2 odmontowany')
  }

  render(){
    return(
    <div>komponent zamontowany</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))