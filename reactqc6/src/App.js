import {useEffect, useState} from "react";

function StopWatch() {
    const [seconds, setSeconds] = useState(0);
    useEffect(()=> {
        const interval = setInterval(() => setSeconds(seconds => seconds +1), 1000);
        return () => clearInterval(interval);
    }, []);
        if (seconds === 10) {
           return  (
               <div>
                   <EmailInput value="your email here"/>
                    <h1> {seconds}</h1>
               </div>
           )
        }
        else{
           return(
               <div><EmailInput value="email"/>
                <h1> {seconds}</h1>
               </div>

            )
        }
}


function CountDown() {
    const [seconds, setSeconds] = useState(10)
    const [isRunning, setRunning] = useState(true)
    useEffect(()=> {
        if (!isRunning ){
            return
        }
        const interval = setInterval(()=> setSeconds(seconds => {
            if (seconds <=1) {
                setRunning(false)
            }
            return seconds -1
        } ), 500);
            return () => clearInterval(interval)
    } , [isRunning])
    return (
        <section>
            <h2>Time left: {seconds}</h2>
            <button onClick={() => setSeconds(10)}>Reset </button>
            <button onClick={() => setRunning(v => !v )} disabled={seconds === 0}>{isRunning ? 'Pause' : 'Resume'}</button>
        </section>
    )
}

function EmailInput( {value}) {
    const [email , setEmail] = useState("");
    useEffect(()=>{
        setEmail(value)
    }, [value])
    return (
        <label>
            Email Address:
            <input type="email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
        </label>
    )
}

function FetchDataEffect() {
  const [options, setOptions] = useState([]);
  useEffect(() => {
       const controller = new AbortController()
      async function FetchData() {
          fetch('//www.swapi.tech/api/people')
              .then(res => res.json())
              .then(data => setOptions(data.results.map(({name}) => name)))
      }
      FetchData();
      return () => {controller.abort()}

  }, [],);

    return (
    <select>
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

function App() {
  return (
    <div className="App">
        <p>Demo 1</p>
    {/*<FetchDataEffect/>*/}
    {/*    <StopWatch/>*/}
        <CountDown/>
    </div>
  );
}

export default App;
