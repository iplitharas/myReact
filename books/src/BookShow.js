import {useState} from "react";

function BookEdit( {book, onSubmit}) {


    const [title, setTitle] = useState(book.title)
    const handleChange = (event) => {
        setTitle(event.target.value )
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(book.id,title)


    }
    return (
        <div className="book-edit">
           <form onSubmit={handleSubmit} className="book-edit">
              <label>Title</label>
               <input  onChange={handleChange} value= {title } className="input" type="text"/>
               <button className="button is-primary">Save</button>
           </form>
        </div>
    )
}

function BookShow({book, onDelete ,onEdit}){
    const [showEdit, setShowEdit] = useState(false)
    const handleClick = ()  => {
        onDelete(book.id)
    }
    const handleSubmit = (id,newTitle) => {
        setShowEdit(!showEdit)
        onEdit(id,newTitle)
    }

    return (
        <div className="book-show">
            {!showEdit ? <p>{book.title}</p> : <BookEdit onSubmit={handleSubmit} book={book} />}
            <img alt="books"  src="https://picsum.photos/300/200"/>
            <div className="actions">
                <button onClick={handleClick} className="delete"> Delete</button>
                <button onClick={handleSubmit} className="edit">Save</button>
            </div>
        </div>
    )
}

export default BookShow