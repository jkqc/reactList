import logo from '../logo.svg';
import '../App.css';

import ClassComponent from '../components/class_func/ClassComponent'
import FunctionComponent from '../components/class_func/FunctionComponent'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassComponent></ClassComponent>
        <FunctionComponent></FunctionComponent>
      </header>
    </div>
  );
}

export default App;
