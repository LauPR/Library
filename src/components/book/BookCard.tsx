import Book from "@/lib/Book";

interface Props{
    book: Book;
}

export default function BookCard({book} : Props){
    return(
        <div 
        className="
            bg-bg-secondary 
            py-3
            px-6
            text-xl
            text-text-secondary
            border 
            border-border-subtle 
            hover:border-accent-primary
            shadow-md
            shadow-shadow
            rounded-2xl
        ">
            <h2 className="text-accent-primary text-2xl">Title: 
                <span className="text-text-primary">
                    {" " + book.title}
                </span>
            </h2>

            <p>Author: 
                <span className="text-text-primary">
                    {" " + book.author}
                </span>
            </p>

            <p>Pages: 
                <span className="text-text-primary">
                    {" " + book.pages}
                </span>
            </p>

            <p>State: 
                <span className="text-text-primary">
                    {" " + book.read ? "read" : "unread"}
                </span>
            </p>

        </div>
    )
}