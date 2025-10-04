

function BookShow({book}){
    return(<div className="book-show">
        {book.id} {book.title}
        <div className="actions"></div>
    </div>);

}
export default BookShow; 