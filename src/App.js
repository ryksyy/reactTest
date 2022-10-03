import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [hrll, setHRLLow] = useState(0);
  const [hrlh, setHRLHigh] = useState(0);
  function calculate()  {
    setHRLLow((220-age)*0.65);
    setHRLHigh((220-age)*0.85);
  }

  return (
    <div>
      <h1>HEART LIMITS CALCULATOR</h1>
      <form>
        <div>
          <label>Age</label><br></br>
          <input type="number" value={age} onChange={e=> setAge(e.target.value)}/><br></br><br></br>
        </div>
        <div>
          <label>Heart rate limits</label><br></br>
          <output>{hrll + "-" + hrlh}</output>
        </div>
        <button type="button" onClick={calculate}>Calculate</button>
      </form>
    </div>
  )
}


export default App;
