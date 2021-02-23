import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a reader</p>
         <Result name="Rubel Mia" Age ="40" ></Result>
         <Result name="Khan Mia" Age ="80" ></Result>
         <Result name="Iliyas Mia" Age ="35" ></Result>
      

      </header>
    </div>
  );
}
function Result(props){
  const ResultStyle ={
    border : '2px solid yellow',
    margin : '10px'
  }
  console.log(props);
  return (
  <div style={ResultStyle} >
    <h2>Name : {props.name}</h2>
    <h2>Other : {props.Age}</h2>

  </div>) 
}


export default App;
