import { useState } from "react";

function BookEdit({book,onEdit}){
    const [title,setTitle]=useState(book.title);
    const handleSubmit=(event)=>{
            event.preventDefault();
            onEdit(book.id,title);
    };
    const handleChange=(event)=>{
        setTitle(event.target.value);
    };
    return(<form onSubmit={handleSubmit} className="book-edit">
        <input value={title} onChange={handleChange}></input> 
        <button>Save</button>
    </form>);

}
export default BookEdit; 