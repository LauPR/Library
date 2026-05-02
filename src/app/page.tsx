'use client'

import BookForm from "@/components/book/BookForm";
import BookList from "@/components/book/BookList";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import { library } from "@/data/library";
import { useState } from "react";


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="text-text-primary min-h-screen bg-bg-primary cursor-default">

      <main>

        <Header />
        <Button text={"Add Book"} onClick={() => setIsModalOpen(true)} className="mx-auto block mt-4"/>
        <BookForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        <BookList books={library} />

      </main>

    </div>
  );
}
