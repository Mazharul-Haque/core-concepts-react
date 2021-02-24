import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Bappi','shuvo','kakku']
  const products = [
    {name : 'photoshop', price : '$99.35'},
    {name : 'illustrator', price : '$80.35'},
    {name : 'Pdf Reader', price : '$60.35'},
    {name : ' Desufn', price : '$100.35'},
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a reader</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          
        </ul>
     
       {
         products.map(product => <Product product={product}></Product> )
       }

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  
  return (
    <div>
      <h3>Count : {count} </h3>
      <button onClick={() => setCount(count - 1) } >Decrease</button>
      <button onClick={handleIncrease} >Increase</button>
    </div>
  )

}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(data => setUsers(data));
  })


  return(
    <div>
      <h3>Dynamic users : {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border : '1px solid yellow',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height : '200px',
    width : '200px',
    float : 'left'
  }
  const {name,price} = props.product;
  return (
    <div style={productStyle} >
        <h2>{name}</h2>
        <h1 >{price} </h1>
        <button>Buy Now</button>
    </div>
  )
}

export default App;
