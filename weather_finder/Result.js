import React from "react";

const Result = (props) => {

  const { err, city, date, sunrise, sunset, temp, pressure, wind } = props.data

  let content = null

  if (!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

    content = (
      <div>
        <div>Pogoda dla: {city}</div>
        <div>Godzina pobrania: {date}</div>
        <div>Wschód słońca: {sunriseTime}</div>
        <div>Zachód słońca: {sunsetTime}</div>
        <div>Temperatura: {temp}</div>
        <div>Ciśnienie: {pressure}</div>
        <div>Wiatr: {wind}</div>
      </div>
    )
  }

  return (
    <div>
      {err ? `Nie ma w naszej bazie: ${city}` : content}
    </div>
  )
}

export default Result
