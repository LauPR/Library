'use client'

import Book from "@/lib/Book";
import Button from "../ui/Button";
import { Trash2 } from "lucide-react";

interface Props {
    book: Book;
    onDeleteBook: (id: number | string) => void;
    onToggleRead: (id: number | string) => void;
}

export default function BookCard({ book, onDeleteBook, onToggleRead }: Props) {

    return (
        <div
            className="
            relative
            flex 
            flex-col
            bg-bg-secondary 
            max-h-64
            min-h-60
            p-4 
            text-text-secondary
            border 
            border-border-subtle 
            hover:border-accent-primary
            shadow-md
            shadow-shadow
            rounded-2xl
        ">
            <Button onDelete={() => onDeleteBook(book.id)} variant="danger" icon={<Trash2 />} className="absolute top-0 right-0" />

            <div
                className="
                flex-1 
                overflow-y-hidden 
                hover:overflow-y-auto
                wrap-break-word 
                space-y-2 
                mb-3
            ">
                <h2 className="text-accent-primary text-xl">Title:
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

                <p>Read:
                    <span className="text-text-primary">
                        {` ${book.read ? "Yes" : "No"}`}
                    </span>
                </p>
            </div>

            <Button onClick={() => onToggleRead(book.id)} text={`Mark as ${book.read ? "Unread" : "Read"}`} className="w-36 mt-auto ml-auto"/>
        </div>
    )
}