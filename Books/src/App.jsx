import BookList from './components/BookList';
import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App(){
    const [books,setBooks]=useState([]);
    const CreateBook=(title)=>{
        setBooks([...books,{id: Math.round(Math.random()*1000),title:title}]);
    };
    
    return (<div className="app">
    
       <BookCreate onCreate={CreateBook}></BookCreate>
       <BookList books={books}></BookList>
    </div>);
}


export default App;