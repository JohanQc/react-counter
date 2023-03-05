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
        <button onClick={() => setNumber(number - 1 )}>-</button>
        <button onClick={() => setNumber(0)}>reset</button>
        <button onClick={() => setNumber(number + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
