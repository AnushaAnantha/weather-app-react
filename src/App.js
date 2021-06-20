import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      <Weather />
      </header>
      <footer> 
     <a
        href="https://github.com/AnushaAnantha/weather-app-react"
        rel="link to github"
      >
        <i class="fab fa-github big-icon"></i>
      </a>
      </footer>
    </div>
  );
}

export default App;
