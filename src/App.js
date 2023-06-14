import logo from './scooby-doo-logo-png-transparent.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My graphite demo!!
        </p>
        <a
          className="App-link"
          href="https://graphite.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Graphite
        </a>
      </header>
    </div>
  );
}

export default App;
