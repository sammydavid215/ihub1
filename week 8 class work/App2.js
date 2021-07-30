import logo from './logo.svg';
import './App.css';
//import { BrowserRouter as Router, Switch, Route} from "react-dom"
import Display from './Display';
function App() {
  const url = 'https://swapi.dev/api/people/?page=2';
  return (
    <div className="App">
     <Display content = {url}/>
    </div>
  );
}

export default App;
