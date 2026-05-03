'use client'

import { SyntheticEvent, useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Book from "@/lib/Book";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAddBook: (book: Book) => void;
}

export default function ({ isOpen, onClose, onAddBook }: Props) {
    const [title, setTitle] = useState <string>('');
    const [author, setAuthor] = useState<string>('');
    const [pages, setPages] = useState<string>('');
    const [read, setRead] = useState<boolean>(false);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        if(!title.trim() || !author.trim() || !pages.trim()){
            alert("Complete the form, please.");
            return;
        }

        const newBook = new Book(title.trim(), author.trim(), parseInt(pages), read);

        onAddBook(newBook);

        setTitle('');
        setAuthor('');
        setPages('');
        setRead(false);

        onClose();
    }

    return (
        <div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <form
                    className="
                        bg-bg-secondary
                        flex 
                        flex-col
                        p-3
                        space-y-4
                    "
                    onSubmit={handleSubmit}
                    >

                    <div className="space-x-2">
                        <label htmlFor="title">
                            Book title:
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder=" ''Jane Eyre'' "
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="
                                px-3
                                border
                                border-transparent
                                rounded-2xl
                                focus:outline-none 
                                focus:border-accent-primary
                            "
                        />
                    </div>

                    <div className="space-x-2">
                        <label htmlFor="author">
                            Author's name:
                        </label>
                        <input
                            id="author"
                            type="text"
                            placeholder=" ''Edgar Allan Poe'' "
                            name="author" 
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                            className="
                                px-3
                                border
                                border-transparent
                                rounded-2xl
                                focus:outline-none 
                                focus:border-accent-primary
                            "
                            />
                    </div>

                    <div className="space-x-2">
                        <label htmlFor="title">
                            Number of pages:
                        </label>
                        <input
                            id="pages"
                            type="text"
                            placeholder=" ''324'' "
                            name="pages"
                            value={pages}
                            onChange={(e) => setPages(e.target.value)}
                            required 
                            className="
                                px-3
                                border
                                border-transparent
                                rounded-2xl
                                focus:outline-none 
                                focus:border-accent-primary
                            "
                            />
                    </div>

                    <div>
                        <fieldset className="flex gap-2">

                            <legend>Did you read the book?</legend>

                            <input
                                id="read"
                                type="radio"
                                name="read" 
                                onChange={() => setRead(true)}
                                checked={read === true}
                                />
                            <label htmlFor="read" className="mr-5">
                                Yes
                            </label>

                            <input
                                id="unread"
                                type="radio"
                                name="read" 
                                onChange={() => setRead(false)}
                                checked={read === false}
                                />
                            <label htmlFor="unread">
                                No
                            </label>

                        </fieldset>
                    </div>

                    <Button text="Save" type="submit" />

                </form >
            </Modal>

        </div >
    )
}