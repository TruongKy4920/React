import BookList from './components/BookList';
import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App(){
    const [books,setBooks]=useState([]);
    const CreateBook=(title)=>{
        setBooks([...books,{id: Math.round(Math.random()*1000),title:title}]);
    };
    const DeleteBook=(id)=>{
        const updatedeleteList=books.filter(book=>{
            return book.id!=id;
        });
        setBooks(updatedeleteList);
    };
    const EditBook=(id,new_title)=>{
        const updateeditList=books.map(book=>{
            if(book.id===id) return {...book,title:new_title};
            return book;
        });
        setBooks(updateeditList);
        
    };
    
    return (<div className="app">
    
       <BookCreate onCreate={CreateBook}></BookCreate>
       <BookList books={books} onDelete={DeleteBook} onEdit={EditBook}></BookList>
    </div>);
}


export default App;