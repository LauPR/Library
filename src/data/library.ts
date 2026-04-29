import Book from "@/lib/Book";

const Library = [];

function createBook(title: string, author: string, pages: number, read: boolean){
        const book = new Book(title, author, pages, read);
    }