import {useState} from "react";
import bird from "./svg/bird.svg";
import dog from "./svg/dog.svg";
import cat from "./svg/cat.svg";
import gator from "./svg/gator.svg";
import cow from "./svg/cow.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import "./AnimalShow.css"

const svgMap = {
    bird : bird,
    cat : cat,
    dog: dog,
    gator,
    cow,
    horse
}
function AnimalShow({type})  {
    const [clicks, setClicks] = useState(0)
    const handleClick = () => { setClicks(clicks+1)}

    return (
        <div className="animal-show" onClick={handleClick}>
            <h2> {type}</h2>
            <img className="animal" alt="text" src={svgMap[type]}/>
            <img className="heart" alt="heart" src={heart} style={ {width:10 + 10 * clicks + "px"} }/>
        </div>
    )
}

export default  AnimalShow