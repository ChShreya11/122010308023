//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      <h1>Trains Schedule Web App</h1>
      <h2>Available Trains and their schedules</h2>
      <h3>Info about available seats and ticket booking:</h3>
      <label for="tname">Train Name:</label>
      <input type="text" id="tname" name="tname"></input>
      <label for="tnumber">Train Number:</label>
      <input type="text" id="tnumber" name="tnumber"></input>
      <label for="ttime">Train departure:</label>
      <input type="text" id="ttime" name="ttime"></input>
      <label for="tprice">Ticket fare:</label>
      <input type="text" id="tprice" name="tprice"></input>
      <label for="tseats">Seats Available:</label>
      <input type="text" id="tseats" name="tseats"></input>
      <label for="tdelay">Train is delayed by:</label>
      <input type="text" id="tdelay" name="tdelay"></input>
      <label for="tcoach">Train Coach:</label>
      <input type="text" id="tcoach" name="tcoach"></input>
      <label for="tclass">Train Coach Class:</label>
      <input type="text" id="tclass" name="tclass"></input>
    </div>
  );
}

export default App;
