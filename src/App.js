import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="row" id="padding-top">
      
      </div>
      <div className="App-header">
        <h1>Weather App</h1>
      <Weather />
      <div class="row" id="padding-top">
      <p>Powered by <a
        href="https://github.com/AnushaAnantha/weather-app-react"
        rel="link to github" 
      >  <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" 
      alt="Github logo"
      width="50" height="50"/>
      </a>
      </p>
      </div>
      
      </div>
           
  
    </div>
  );
}

export default App;
