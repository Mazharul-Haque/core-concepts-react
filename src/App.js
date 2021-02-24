import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
