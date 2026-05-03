import Book from "@/lib/Book";

const library : Book[] = [];

function createBook(title: string, author: string, pages: number, read: boolean) : void {
        const book = new Book(title, author, pages, read);

        library.push(book);
}

export {library, createBook};