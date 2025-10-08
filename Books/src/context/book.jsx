import { createContext,useState } from "react";
import axios from "axios";
const BookContext=createContext();

function Provider({children}){
    const [books,setBooks]=useState([]);
    const fetchBooks=async()=>{
        const response =await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }
    const CreateBook=async(add_title)=>{
        const response =await axios.post('http://localhost:3001/books',{
            title: add_title
        });
        console.log(response.data);
        const updatebooks=[...books,response.data];
        setBooks(updatebooks);
    };
    const EditBook=async(id,new_title)=>{
        const response =await axios.put(`http://localhost:3001/books/${id}`,{
            title: new_title
        });
        
            const updatedBooks=books.map((book)=>{
                if(book.id===id) {
                    return {...book,...response.data};
                }
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
    const valuetoShare={
        books:books,
        onCreate: CreateBook,
        onEdit: EditBook,
        onDelete: DeleteBook,
        fetchBooks:fetchBooks
    };
    return <BookContext.Provider value={valuetoShare}>{children}</BookContext.Provider>
}
export default BookContext;
export {Provider};