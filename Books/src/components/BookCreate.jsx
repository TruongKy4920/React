import { useState,useContext } from "react";
import BookContext from "../context/book";
function BookCreate(){
    const [title,setTitle]= useState('');
    const {onCreate}=useContext(BookContext);
    const handleChange=(event)=>{
        setTitle(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };
    return( <div className="book-create">
                <form onSubmit={handleSubmit} >
                    <input className="input" value={title} onChange={handleChange}></input>
                    <button className="button">Add book </button>
                </form> 
            </div>);  
}
export default BookCreate;