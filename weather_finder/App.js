import React, { Component } from 'react'
import './App.css'
import Form from './Form'
import Result from './Result'

class App extends Component {

  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false
  }

  handleInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState){

    if(prevState.value !== this.state.value){

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=efa2ef11f117f7485b2fca8e87a3a2f5&units=metric`

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("nie udalo sie")
      })
      .then(response => response.json())
      .then(data => {

        const time = new Date().toLocaleString()
        this.setState({
          date: time,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.sys.temp,
          pressure: data.sys.pressure,
          wind: data.wind.speed,
          err: false
        })
      })
      .catch(err => {
        this.setState(state => ({
          err: true,
          city: this.state.value
        }))
      })
    }
  }

  render() {
    return (
      <div>
        <Form
          value={this.state.value}
          change={this.handleInput}
          submit={this.handleCitySubmit}
        />
        <Result data={this.state} error={this.state.err} />
      </div>
    )
  }
}
export default App
