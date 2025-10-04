import BookShow from './BookShow';
function BookList({books}){
    const re_render=books.map(book=>{
        return <BookShow key={book.id} book={book}></BookShow>
    });
    return(<div className='book-list'>
        {re_render}
    </div>);

}
export default BookList; 