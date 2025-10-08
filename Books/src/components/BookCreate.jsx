import { useState } from "react";
function BookCreate({onSubmit}){
    const [title,setTitle]= useState('');
    const handleChange=(event)=>{
        setTitle(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit(title);
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