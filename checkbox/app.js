const PositiveMessage = () => <p>Mozesz obejrzec</p>

const NeativeMessage = () => <p> nie mozesz obejrzec</p>

class CheckboxAge extends React.Component {

  state = {
    isConfirmed: false,
    isFormShow: true,
    isFormSubmitted: false
  }

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormShow: !this.state.isFormShow,
      isFormSubmitted: false
    })
  }

  handleChangeFormSubmit = (e) => {
    e.preventDefault()
    if(!this.state.isFormSubmitted){
      this.setState({
        isFormSubmitted: true
      })
    }
  }

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage />
      } else {
        return <NeativeMessage />
      }
    } else { return null }
  }

  render() {
    return (
      <>
        <h1>Kup bilet na film</h1>
        <form onSubmit={this.handleChangeFormSubmit}>
          <input type="checkbox" id="age" onChange={this.handleChange} checked={this.state.isConfirmed} />
          <label htmlFor="age">Mam powyzej 18 lat</label>
          {this.displayMessage()}
          <p hidden={this.state.isFormShow}>Mozesz kupic bilet</p>
          <br />
          <button>Kup bilet</button>
        </form>
      </>
    )
  }
}

ReactDOM.render(<CheckboxAge />, document.getElementById('root'))