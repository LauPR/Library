import Book from "@/lib/Book";

const library : Book[] = [];

function createBook(title: string, author: string, pages: number, read: boolean) : void {
        const book = new Book(title, author, pages, read);

        library.push(book);
}

createBook("harry potter", "fjdnf", 122, true);
createBook("holis", "que tal", 222, false);

export {library, createBook};