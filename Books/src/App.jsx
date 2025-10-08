import { useState,useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
function App(){
    const [books,setBooks]=useState([]);
    const fetchBooks=async()=>{
        const response =await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }
    useEffect(()=>{
        fetchBooks()},[]);
    const CreateBook=async(add_title)=>{
        const response =await axios.post('http://localhost:3001/books',{
            title: add_title
        });
        console.log(response.data);
        const updatebooks=[...books,response.data];
        setBooks(updatebooks);
    };
    const EditBook=async(id,new_title)=>{
        const response =await axios.delete(`http://localhost:3001/books/${id}`,{
            title: new_title
        });
        
            const updatedBooks=books.map((book)=>{
                if(book.id===id) return {...book,...response.data};
                return book;
            });
            setBooks(updatedBooks);
    };
    const DeleteBook=async(id)=>{
         const response =await axios.delete(`http://localhost:3001/books/${id}`)
            const updatebooks=books.filter((book)=>{
                return book.id!==id;
            });
            setBooks(updatebooks);
    }
    return(<div className="app">
            <BookList books={books} onEdit={EditBook} onDel={DeleteBook}></BookList>
            <BookCreate onSubmit={CreateBook}></BookCreate>
            </div>);  
}
export default App;