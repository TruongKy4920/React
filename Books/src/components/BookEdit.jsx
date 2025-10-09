import { useState} from "react";
import useBooksContext from '../hooks/use-books-context';

function BookEdit({closeEdit,book}){
    const [title, setTitle]=useState(book.title);
    const {onEdit}=useBooksContext();
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