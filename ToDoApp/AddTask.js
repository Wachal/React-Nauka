import React from "react"

class AddTask extends React.Component {

  minDate = new Date().toISOString().slice(0, 10)
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  handleClick = () => {
    const { text, checked, date } = this.state

    if (text.length > 2) {
      if (this.props.add(text, date, checked)) {
        this.setState({
          text: ' ',
          checked: false,
          date: this.minDate
        })
      }
    } else {
      alert('nazwa za krótka')
    }
  }

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1
    maxDate = maxDate + "12-31"

    return (
      <div>
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        >
        </input>
        <input
          id="important"
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheckbox}
        >
        </input>
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobic</label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={this.maxDate}
          onChange={this.handleDate}
        >
        </input>
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    )
  }
}

export default AddTask