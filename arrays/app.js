const data = {
  users: [
    {
      id: 1,
      age: 30,
      name: "Arek",
      sex: "male"
    },
    {
      id: 2,
      age: 20,
      name: "Kuba",
      sex: "male"
    },
    {
      id: 3,
      age: 35,
      name: "Zosia",
      sex: "female"
    },
  ]
}

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{`Imię ${user.name}`}</h1>
    <p>Informajce o uzytkowniku:</p>
    <p>{`Wiek ${user.age}`}</p>
    <p>{`płeć ${user.sex}`}</p>
    <br />
  </div>
)

class ListItems extends React.Component {
  state = {
    select: "all",
  }

  usersList = () => {
    let users = this.props.data.users

    switch (this.state.select) {
      case "all":
        return users.map(user => <Item user={user} key={user.id} />)

      case "female":
        users = users.filter(user => user.sex === "female")
        return users.map(user => <Item user={user} key={user.id} />)

      case "male":
        users = users.filter(user => user.sex === "male")
        return users.map(user => <Item user={user} key={user.id} />)

      default:
        return "niepoprawne dane"
    }
  }

  handleUsersFilter = (option) => {
    this.setState({
      select: option
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>wszyscy </button>
        <button onClick={this.handleUsersFilter.bind(this, "female")}>kobiety</button>
        <button onClick={this.handleUsersFilter.bind(this, "male")}>mezczyzni</button>
        {this.usersList()}
      </div>
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
