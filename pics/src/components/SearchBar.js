import {useState} from "react";
import "./SearchBar.css"
function SearchBar ( {onSubmit}) {

    const [term , setTerm] = useState("")
    const handleSubmit = (evt ) => {
            evt.preventDefault()
            onSubmit(term)
    }
    const handleChange = (evt) => {
        // we need this to be able to have the right
        // state in the React word!
        // this will re-render in any new char
        setTerm(evt.target.value)

    }
    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit} >
                <label> Enter search term: </label>
                <input value= {term} onChange={handleChange} type="text" name="query"/>
            </form>
        </div>
    )
}


export default SearchBar