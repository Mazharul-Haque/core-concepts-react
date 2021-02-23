import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'joshim', 'Maruf']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a reader</p>
        <Person name = "Munna" Profession ="Jobless"  ></Person>
        <Person name = "Sadik" Profession ="Football"  ></Person>
        <Person></Person>
        <Person></Person>
         
      

      </header>
    </div>
  );
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
