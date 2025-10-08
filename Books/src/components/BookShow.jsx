import BookEdit from "./BookEdit";
import { useState } from "react";
function BookShow({book,onEdit}){  
    const [showEdit,setShowEdit]=useState(false);
    let content= <div> {book.id} {book.title} </div>;
    if(showEdit) content=<BookEdit onEdit={onEdit} book={book}>EDIT</BookEdit>;
    const handleShow = (event) =>{
        setShowEdit(!showEdit);
    }
    const combineShowEonEdit=()=>{
        showEdit(false);
        onEdit(book.id,title);
    }
    return( <div>
        {content}
        <div>
            <button onClick={handleShow}>Edit</button>
        </div>
    </div> );  
}
export default BookShow;