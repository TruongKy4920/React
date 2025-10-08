import { useState } from "react";
import BookCreate from "./components/BookCreate";
function App(){
    const [books,setBooks]=useState([]);
    const CreateBook=(add_title)=>{
       const updatebooks=[...books,{id: Math.round(Math.random()*1000), title:add_title}];
       setBooks(updatebooks);
    };
    
    return( <div>
        {books.length}
        <BookCreate onSubmit={CreateBook}></BookCreate>
        
    </div> );  
}
export default App;