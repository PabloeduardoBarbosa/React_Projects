import './App.css';
import {Users} from './Users'

function App() {
  const users = [
    {name:"Pablo", age:21},
    {name:"Rodrigo", age:12},
    {name:"Eduardo", age:24}

  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return (
          <div>
            <Users name={user.name} age={user.age}/>
          </div>
        );
      })}
    </div>
  ); 
}  


export default App;
