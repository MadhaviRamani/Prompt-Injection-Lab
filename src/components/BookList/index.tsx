import { reviewsForBook } from "../../reviews";
import type { Book, Review } from "../../types";
import BookCard from "../BookCard";

type BookListProps = {
  books: Book[];
  reviews: Review[];
  onToggleRead: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function BookList({
  books,
  reviews,
  onToggleRead,
  onRemove,
}: BookListProps) {
  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          reviews={reviewsForBook(reviews, book.id)}
          onToggleRead={() => onToggleRead(book.id)}
          onRemove={() => onRemove(book.id)}
        />
      ))}
    </ul>
  );
}
