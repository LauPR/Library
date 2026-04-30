import BookList from "@/components/book/BookList";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import { library } from "@/data/library";


export default function Home() {
  return (
    <div className="text-text-primary">

      <main className="bg-bg-primary h-full cursor-default">

        <Header/>
        <Button text={"Add Book"}/>
        <BookList books={library}/>

      </main>

    </div>
  );
}
