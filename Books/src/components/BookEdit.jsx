import { useState } from "react";
function BookEdit({book,onEdit}){
    const [title, setTitle]=useState(book.title);
    const handleChange=(event)=>{
        setTitle(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        onEdit(book.id,title);
    }
    return( <form onSubmit={handleSubmit} >
                <input value={title} onChange={handleChange}></input>
                <button> </button>
            </form> );  
}
export default BookEdit;