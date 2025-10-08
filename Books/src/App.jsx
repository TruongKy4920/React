import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App(){
    const [books,setBooks]=useState([]);
    const CreateBook=(add_title)=>{
       const updatebooks=[...books,{id: Math.round(Math.random()*1000), title:add_title}];
       setBooks(updatebooks);
    };
    const EditBook=(id,new_title)=>{
            const updatedBooks=books.map((book)=>{
                if(book.id===id) return {...book,title:new_title};
                return book;
            });
            setBooks(updatedBooks);
    };
    return(<div>
            <BookList books={books} onEdit={EditBook}></BookList>
            <BookCreate onSubmit={CreateBook}></BookCreate>
            </div>);  
}
export default App;