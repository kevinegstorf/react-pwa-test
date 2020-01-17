import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [coords, setCoords] = React.useState({});
  const [time, setTime] = React.useState();

  React.useEffect(() => {
    setInterval(myTimer, 1000);
    navigator.geolocation.getCurrentPosition(success);
    function myTimer() {
      const d = new Date();
      setTime(d.toLocaleTimeString());
    }
  }, []);

  function success(pos) {
    const crd = pos.coords;
    setCoords(crd);
  }

  console.log(coords);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{time}</p>
          <p>{coords.latitude}</p>
          <p>{coords.longitude}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
