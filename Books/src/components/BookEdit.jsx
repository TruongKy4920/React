import { useState,useContext } from "react";
import BookContext from "../context/book";

function BookEdit({closeEdit,book}){
    const [title, setTitle]=useState(book.title);
    const {onEdit}=useContext(BookContext);
    const handleChange=(event)=>{
        setTitle(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        closeEdit();
        onEdit(book.id, title);
    }
    return( <form onSubmit={handleSubmit} >
                <input className="input" value={title} onChange={handleChange}></input>
                <button className="button is_primary">Save </button>
            </form> );  
}
export default BookEdit;