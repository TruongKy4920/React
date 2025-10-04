import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({book,onDelete,onEdit}){
    const [showEdit,setShowEdit]= useState(false);
    const handleEditClick =()=>{
        setShowEdit(!showEdit);
    };
    const handleDeleteClick=()=>{
        onDelete(book.id);
    }
    const handleEdit=(id,title)=>{
        setShowEdit(false);
        onEdit(id,title);
    };
    let content= <h3>{book.title} </h3>
    if(showEdit) content=<BookEdit book={book} onEdit={handleEdit}></BookEdit>
    return(<div className="book-show">
        {content}
        <div className="actions">
            <button className="delete" onClick={handleDeleteClick}></button>
            <button className="edit" onClick={handleEditClick}></button>
        </div>
    </div>);

}
export default BookShow; 