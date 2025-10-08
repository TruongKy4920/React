import BookEdit from "./BookEdit";
import { useState,useContext } from "react";
import BookContext from "../context/book";
function BookShow({book}){  
    const [showEdit,setShowEdit]=useState(false);
    const {onDelete}=useContext(BookContext);
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