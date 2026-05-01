import Book from "@/lib/Book"
import BookCard from "./BookCard"

interface Props {
    books: Book[];
}

export default function BookList({ books }: Props) {
    return (
        <div
            className="
            mx-6
            p-3
            grid
            grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
            gap-3
        ">

            {books.map(book => (
                <BookCard key={book.id} book={book} />
            ))}

        </div>
    )
}