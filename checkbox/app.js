const PositiveMessage = () => <p>Mozesz obejrzec</p>

const NeativeMessage = () => <p> nie mozesz obejrzec</p>

class CheckboxAge extends React.Component {

  state = {
    isConfirmed: false,
  }

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    })
  }

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />
    } else {
      return <NeativeMessage />
    }
  }

  render() {
    return (
      <>
        <h1>Kup bilet na film</h1>
        <input type="checkbox" id="age" onChange={this.handleChange} checked={this.state.isConfirmed} />
        <label htmlFor="age">Mam powyzej 18 lat</label>
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<CheckboxAge />, document.getElementById('root'))