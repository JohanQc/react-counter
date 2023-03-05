import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  console.log(number);

  return (
    <div className="App">
      <div className="container">
        <div>
          <h1>{number}</h1>
        </div>
        <div className="container-btn">
        <button className="btn" onClick={() => setNumber(number - 1 )}>-</button>
        <button className="btn"onClick={() => setNumber(0)}>reset</button>
        <button className="btn"onClick={() => setNumber(number + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
