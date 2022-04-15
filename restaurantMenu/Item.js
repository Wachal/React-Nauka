const Item = (props) =>(
    <li style={props.active ? {fontWeight: 'bold' } : {color: 'gray' }}>{props.name}</li>
)