const Header = (props) => {

  const activeItems = props.items.filter(item => item.active)
  const number = activeItems.length

  return (
    <header>
      <h2>Wielkosc zamowienia: {number}</h2>
      <h2>Do zaplaty: {number ? `Masz do zapłaty ${number *10}` : 'nie masz wybranych zadnych produktow' } zlotych</h2>
    </header>
  )
}