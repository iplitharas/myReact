import {useState} from "react";

function  AddBook({handleAddBook}) {

     const [title , setTitle] = useState("")
    const handleSubmit = (evt ) => {
            evt.preventDefault()
            handleAddBook({id : Math.round(Math.random() * 999), title: title})
            setTitle("")
    }
       const handleChange = (evt) => {
        // we need this to be able to have the right
        // state in the React word!
        // this will re-render in any new char
        setTitle(evt.target.value)

    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Add a new book! </label>
                <input className="input" value={title} onChange={handleChange} type="text" name="add-book"/>
                <button className="button"> Create!</button>
            </form>

        </div>
    )
}

export default AddBook