
import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={1200} role="Software Engeneer" company="Google"/>
      <Job salary={2400} role="Fullstack" company="Amazon"/>
    </div>
  ); 
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.role}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
