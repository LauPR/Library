import Book from "@/lib/Book"
import BookCard from "./BookCard"

interface Props {
    books: Book[];
}

export default function BookList({books} : Props){
    return(
        <div>

            {books.map(book => (
                <BookCard key={book.id} book={book}/>
            ))}

        </div>
    )
}