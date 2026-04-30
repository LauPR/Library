import Book from "@/lib/Book";

const Library : Book[] = [];

function createBook(title: string, author: string, pages: number, read: boolean) : void {
        const book = new Book(title, author, pages, read);

        Library.push(book);
}