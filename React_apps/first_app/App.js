import React from 'react'
import './App.css'

const data = [
  { id: 1, title: "wiadom nr 1", body: "zawartosc wiad nr 1" },
  { id: 2, title: "wiadom nr 2", body: "zawartosc wiad nr 2" }
]

setInterval(() => {
  const index = data.length + 1
  data.push({
    id: index,
    title: `widomosc nr ${index}`,
    body: `zawartosc wiadomosci nr ${index}`
  })
}, 4000)

export default class App extends React.Component {

  state = {
    comments: [...data]
  }

  getData = () => {
    if(this.state.comments.length !== data.length){
      this.setState({
        comments: [...data]
      })
    }else{
      console.log('dane bez zmian')
    }
  }

  componentDidMont() {
    this.idI = setInterval(this.getData, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.idI)
  }

  render() {

    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>title{comment.title}</h4>
        <p>{comment.body}</p>
      </div>
    ))

    return (
      <div>
        {comments.reverse()}
      </div>
    )
  }
}

