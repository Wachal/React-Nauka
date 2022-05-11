import React from "react";

const UsersList = (props) => {

  const users = props.users.map(user => (
    <div key={user.login.uuid}>
      <p>{`${user.name.title} ${user.name.last}`}</p>
    </div>
  ))
  
  return (
    <ul>
      {users}
    </ul>
  )
}

export default UsersList
