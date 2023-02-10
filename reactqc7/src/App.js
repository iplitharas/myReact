import {memo, useCallback, useRef, useState} from "react";

function DoubleClickCounter(){
  // DoubleClickCounter demo
  // With this implementation we always re-render the component
  // if it's not `doubleClicked`
  const [counter, setCounter] = useState(0);
  // improve the above line with `useRef`
  // const [lastClickedTime, setLastClickedTime] = useState(null);
const lastClickedTime = useRef(null)
  const onClickIncrease = () => {
    const isDoubleClicked = Date.now() - lastClickedTime.current < 300;
    if (isDoubleClicked){
       setCounter((value) => value +1 )
    } else{
      // setLastClickedTime(Date.now())
      lastClickedTime.current = Date.now()
    }
  }
  const onClickReset = () => {
    setCounter((value)=> 0)
  }

  return (
      <div>
        <p>Counter: {counter}</p>
          <button onClick={onClickIncrease}>Increment</button>
          <button onClick={onClickReset}>Reset</button>
      </div>
  )
}

const  ToDOItems = memo(function ToDOItems({items, onDelete}){
  return (
      <>
        <h2>Todo Items</h2>
           <ul>
                {items.map(todo => (
                        <li key={todo}>
                            {todo}
                             <></><button onClick={() => onDelete(todo)}>X</button>
                        </li>
                    )
                )
                }
      </ul>
      </>
  )
});

function Todo() {
    // because we have the onChange it will force
    // the rendering of the component in each type..
    const [items, setItems] = useState(["Learn React", "Learn Javascript"])
    const [newItem, SetNewItem] = useState("")
    const onChange = (evt) => SetNewItem(evt.target.value);
    const onSubmit = (evt) => {
        setItems(items => items.concat([newItem]));
        SetNewItem("")
        evt.preventDefault()
    }
    const onDelete = useCallback(
    (item) => setItems(list => list.filter(i => i !== item)),
    [],
    );
    return (
       <div>
             <ToDOItems items={items} onDelete={onDelete}/>
           <form onSubmit={onSubmit}>
               <input value={newItem} onChange={onChange}/>
               <button>Add</button>
           </form>
       </div>
   )
}


function App() {
  return (
    <div className="App">
    <h1> Chapter 7</h1>
      <DoubleClickCounter/>
        <Todo/>
    </div>
  );
}

export default App;
