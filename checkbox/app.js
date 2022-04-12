
const ValidationMessage = (props) => {
  const { thx } = props
  return (
    <p>{props.txt}</p>
  )
}

class CheckboxAge extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    })
  }

  handleChangeFormSubmit = (e) => {
    e.preventDefault()
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      })
    }
  }

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Mozesz oglądac" />
      } else {
        return <ValidationMessage txt="nie mozesz ogladac" />
      }
    } else { return null }
  }

  render() {
    const { isConfirmed } = this.state

    return (
      <>
        <h1>Kup bilet na film</h1>
        <form onSubmit={this.handleChangeFormSubmit}>
          <input type="checkbox" id="age" onChange={this.handleChange} checked={isConfirmed} />
          <label htmlFor="age">Mam powyzej 18 lat</label>
          {this.displayMessage()}
          <br />
          <button>Kup bilet</button>
        </form>
      </>
    )
  }
}

ReactDOM.render(<CheckboxAge />, document.getElementById('root'))