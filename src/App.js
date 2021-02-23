import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'joshim', 'Maruf']
  const products = [{name : 'photoshop', price : '$99.35'}]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a reader</p>
        <Product name={products[0].name}  ></Product>
        
        <Person name = "Munna" Profession ="Jobless"  ></Person>
        <Person name = "Sadik" Profession ="Football"  ></Person>
        <Person></Person>
        <Person></Person>
         
      

      </header>
    </div>
  );
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
  return (
    <div style={productStyle} >
        <h2>{props.name}</h2>
        <h1></h1>
        <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return (
    <div>
      <h3>My Name : {props.name}</h3>
      <p>Profession : {props.Profession} </p>
    </div>
  )
}
export default App;
