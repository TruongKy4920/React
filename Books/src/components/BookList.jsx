import BookShow from './BookShow';

function BookList({books,onEdit}){
    const re_render= books.map((book)=>{
        return <BookShow key={book.id} book={book} onEdit={onEdit}></BookShow>;
    });

    return (<div>
                {re_render}
            </div>);
}  
export default BookList;