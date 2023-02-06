import React from "react";
import ReactDOM from "react-dom/client";


const el = document.getElementById("root")

const root = ReactDOM.createRoot(el);

function Greet( {name, ...rest} ) {
      const date = new Date();
      const time = date.toLocaleTimeString();
    return  (
        <div>
            <h1>Hi there {name}</h1>
            <h1>you are {rest.age}</h1>
            <h2>Time is {time}</h2>
        </div>
        );
}

function App() {
    return  (
        <div>
        <Greet name={"Michael"} age={"31"}/>
        </div>
        );
}

root.render(<App/>)