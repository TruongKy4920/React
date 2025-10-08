import { useEffect,useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/book";
function App(){
    const {fetchBooks}=useContext(BookContext);
    useEffect(()=>{fetchBooks()},[]);
    
    
    return(<div className="app">
            <BookList ></BookList>
            <BookCreate ></BookCreate>
            </div>);  
}
export default App;