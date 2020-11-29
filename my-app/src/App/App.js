import logo from '../logo.svg';
import '../App.css';

const name = "react study"
const obj = {
  firstName:'wang',
  lastName:'guanglei'
}
function mergeName(name){
  return name.firstName + name.lastName
}
const show =  true
const arr = [1,2,3,4,5,6]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Hello {name} <br/>
          Hello {mergeName(obj)}
          {show ? 'true' : 'false'}
          {/* shuzu */}
          {arr.map(item => {
            return <span key={item}>{item}</span>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
