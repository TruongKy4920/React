import BookEdit from "./BookEdit";
import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';
function BookShow({book}){  
    const [showEdit,setShowEdit]=useState(false);
    const {onDelete}=useBooksContext();
    const handleShow = (event) =>{
        setShowEdit(!showEdit);
    }
    const CloseEdit=()=>{
        setShowEdit(false);
    }
    const handleDelete=(event)=>{
        onDelete(book.id);
    }
    let content= <div> {book.id} {book.title} </div>;
    if(showEdit) content=<BookEdit closeEdit={CloseEdit} book={book} >EDIT</BookEdit>;
    return( <div className="book-show">
            {content}
        <div className="actions">
            <button className="delete" onClick={handleDelete}>delete</button>
            <button className="edit" onClick={handleShow}>edit</button>
        </div>
    </div> );  
}
export default BookShow;