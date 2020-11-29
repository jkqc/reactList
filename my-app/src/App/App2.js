import logo from '../logo.svg';
import '../App.css';

import SetStatePage from '../components/SetState'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SetStatePage></SetStatePage>
      </header>
    </div>
  );
}

export default App;
