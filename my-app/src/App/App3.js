import logo from '../logo.svg';
import '../App.css';

import ReduxPage from '../components/ReactComponent'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReduxPage></ReduxPage>
      </header>
    </div>
  );
}

export default App;
