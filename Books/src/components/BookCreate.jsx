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
    return( <form onSubmit={handleSubmit} >
        <input value={title} onChange={handleChange}></input>
        <button> </button>
    </form> );  
}
export default BookCreate;