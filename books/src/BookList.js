import BookShow from "./BookShow";

function BookList( {books, onDelete, onEdit} ) {
    console.log(books)
    return (

        <div className="book-list">
           {books.map( (book) => {
                    return <BookShow book={book} onDelete={onDelete}  onEdit= {onEdit} key={book.id}/>
            })}

        </div>
    )
}


export default BookList