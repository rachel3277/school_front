import './App.css';
import {Events} from '../src/components/manager/events.jsx'
import { Student } from './components/manager/students.jsx';
import { Login } from './components/login.jsx';
import { Routing } from './components/routing.jsx';
function App() {


  return (<div className="App">
   
    <Routing></Routing>
  </div>
  );
}

export default App;
