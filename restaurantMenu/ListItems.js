const ListItems = (props) => {
  const items = props.items.map(item => (
    <Item 
      key={item.id} 
      name={item.name}
      id={item.id}
      active={item.active} 
      changeStatus={props.changeStatus}
    />
  ))

  return (
    <div className="list">
      <h1>Twoje zamowienie</h1>
      <ul>
        {items}
      </ul>
    </div>

  )
}