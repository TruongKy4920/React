import BookEdit from "./BookEdit";
import { useState } from "react";
function BookShow({book,onEdit,onDel}){  
    const [showEdit,setShowEdit]=useState(false);
    
    const handleShow = (event) =>{
        setShowEdit(!showEdit);
    }
    const combineShowEonEdit=(id,title)=>{
        onEdit(id,title);
        setShowEdit(false);
    }
    const handleDelete=(event)=>{
        onDel(book.id);
    }
    let content= <div> {book.id} {book.title} </div>;
    if(showEdit) content=<BookEdit onEdit={combineShowEonEdit} book={book}>EDIT</BookEdit>;
    return( <div>
        {content}
        <div className="actions">
            <button className="delete" onClick={handleDelete}></button>
            <button className="edit" onClick={handleShow}></button>
        </div>
    </div> );  
}
export default BookShow;