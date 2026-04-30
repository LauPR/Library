import Book from "@/lib/Book";

interface Props{
    book: Book;
}

export default function BookCard({book} : Props){
    return(
        <div>
            <h2>Title: {book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
            <p>State: {book.read ? "read" : "unread"}</p>
        </div>
    )
}