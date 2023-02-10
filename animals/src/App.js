
import AnimalShow from "./AnimalShow";
import {useState} from "react";
import "./App.css"
function getRandomAnimal() {
  const animals = ["dog", "cat", "cow", "bird", "gator" ,"horse"];
  return animals[Math.floor(Math.random() *animals.length)]
}

function AddAnimalButton ( {handleClick}) {

  return (
      <button onClick={handleClick}>Add Animal!</button>
  )
}
function App() {
  const [animals, setAnimals] = useState([])
  const handleClick = (i) => {
    const animal = getRandomAnimal()
    setAnimals([...animals, animal])
  }
  return (
    <div className="app">
      <h2> Animals demo project</h2>
        <AddAnimalButton handleClick={handleClick}/>
      <div className="animals-list">
           {animals.map( (animal, index) => {
          return <AnimalShow type={animal} key={index}/>
          }
          )
        }
      </div>

    </div>
  );
}

export default App;
