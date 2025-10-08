import BookShow from './BookShow';
import BookContext from "../context/book";
import { useContext } from 'react';
function BookList(){
    const {books}=useContext(BookContext);
    const re_render= books.map((book)=>{
        return <BookShow key={book.id} book={book} ></BookShow>;
    });

    return (<div className="book-list">
                {re_render}
            </div>);
}  
export default BookList;