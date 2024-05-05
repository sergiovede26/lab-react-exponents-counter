import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((actualNum) => actualNum + 1);
  const decrement = () => setCount((actualNum) => actualNum - 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} increment={increment} decrement={decrement} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <ExponentTwo count={count}/>
        <ExponentThree count={count}/>
        <ExponentFour count={count}/>
        <ExponentFive count={count}/>
        <ExponentSix count={count}/>
      </div>
    </div>
  );
}

export default App;
