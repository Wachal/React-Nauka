class App extends React.Component {

  state = {
    avaibleProducts: 7,
    shoppingCart: 0
  }

  handleRemoveFromCart = () =>{
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    })
  }

  handleAddToCart = () =>{
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    })
  }

  render() {
    const { shoppingCart, avaibleProducts } = this.state

    return (
      <>
        <button onClick={this.handleRemoveFromCart} disabled={shoppingCart ? false : true}>-</button>
        <span> {shoppingCart} </span>
        <button onClick={this.handleAddToCart} disabled={shoppingCart >= avaibleProducts ? true : false}>+</button>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
