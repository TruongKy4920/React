import BookContext from "../context/book";
import { useContext } from 'react';
function useBooksContext(){
    return useContext(BookContext);;
}
export default useBooksContext;