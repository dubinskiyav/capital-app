import logo from './logo.svg';
import './App.css';
import Greetings2 from "./Greetings2";
import Greetings3 from "./Greetings3";
import Greetings4 from "./Greetings4";
import SimpleForm from "./SimpleForm";

const Greetings = (propss) => <div>Hey you! {propss.firstName} {propss.lastName}!</div>;
const Greetings1 = ({ firstName, lastName }) => <div>Hey you! {firstName} {lastName}!</div>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Greetings firstName="John" lastName="Smith" />
        <Greetings1 firstName="John" lastName="Smith" />
        <Greetings2 firstName="John" lastName="Smith" />
        <Greetings3 firstName="Вася" lastName="Пупкин" />
        <Greetings4 firstName="Вася" lastName="Пупкин" />
        <SimpleForm />
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
