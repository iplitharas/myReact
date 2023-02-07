import {useState} from "react";

function CounterDemo(){
    const [counter, setCounter] = useState(1)
     return (
      <div>
        <p> Counter is: {counter}</p>
          <button onClick={() => setCounter(value => value +1)}>
              Click me!
          </button>
          <button onClick={() => setCounter(value => 0)}>
              Reset
          </button>
      </div>
    )
}



function App() {
  return (
      <div>
           <h1>Using Reacts State system</h1>
            <CounterDemo/>
      </div>

  );
}

export default App;
