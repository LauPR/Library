class Book {
    id: string;
    title: string;
    author: string;
    pages: number;
    read: boolean;

    constructor(title: string, author: string, pages: number, read: boolean = false){
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info(): string{
        return (
            `"${this.title}" by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'unread'}`
        )
    }
}

export default Book;