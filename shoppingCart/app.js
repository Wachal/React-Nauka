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

  handleBuy = () =>{
    this.setState({
      avaibleProducts: this.state.avaibleProducts - this.state.shoppingCart,
      shoppingCart: 0
    })
  }

  render() {
    const { shoppingCart, avaibleProducts } = this.state

    return (
      <>
        <button 
          onClick={this.handleRemoveFromCart} 
          disabled={shoppingCart ? false : true}
        >-</button>
        <span> {shoppingCart} </span>
        <button 
          onClick={this.handleAddToCart} 
          disabled={shoppingCart >= avaibleProducts ? true : false}
        >+</button>
        { shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
