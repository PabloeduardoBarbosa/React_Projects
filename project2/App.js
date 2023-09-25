
import './App.css';

function App() {
  const age = 18;
  const isGreen = true;
  return (
    <div className="App">
       {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
       <h1 style={{color: isGreen ? "green" : "red"}}>This is an example</h1>
    </div>
  ); 
}


export default App;
