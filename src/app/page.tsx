'use client'

import BookForm from "@/components/book/BookForm";
import BookList from "@/components/book/BookList";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import { DeleteItemById } from "@/lib/arrayUtils";
import Book from "@/lib/Book";
import { useState } from "react";


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([]);

  const handleDeleteBook = (id: number | string) => {
    setBooks(prev => DeleteItemById(prev, id));
  }

  const handleAddBook = (newBook: Book) => {
    setBooks(prev => [...prev, newBook]);
  }

  return (
    <div className="text-text-primary min-h-screen bg-bg-primary cursor-default">

      <main>

        <Header />

        {/* add book */}
        <Button
          text={"Add Book"}
          onClick={() => setIsModalOpen(true)}
          className="mx-auto block mt-4" />

        {/* form to add a book */}
        <BookForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddBook={handleAddBook} />

        {/* book list */}
        <BookList
          books={books}
          onDeleteBook={handleDeleteBook} />

      </main>

    </div>
  );
}
