class App extends React.Component {
  state = {
    active: true,
  }

  handleClick = () => {
    this.setState(state => ({
      active: !state.active
    }))
  }

  render() {
    return (
      <div>
        {this.state.active && <Clock />}
        <SwitchButton active={this.state.active} click={this.handleClick} />
      </div>
    )
  }
}

const SwitchButton = props => (
  <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
)

class Clock extends React.Component {

  state = {
    time: this.getTime()
  }

  getTime() {
    const currentTime = new Date();
    return ({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    }
    )
  }

  setTime() {
    const time = this.getTime()
    this.setState({ time })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setTime()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { hours, minutes, seconds } = this.state.time
    return (
      <div>
        {hours} : {minutes > 9 ? minutes : `0${minutes}`} : {seconds > 9 ? seconds : `0${seconds}`}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))