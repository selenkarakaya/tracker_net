import BooksItem from "./BooksItem";
import BookForm from "./BookForm";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import Spinner from "./shared/Spinner";

function BooksList() {
  const { books, isLoading } = useContext(MoviesContext);
  if (!isLoading && (!books || books.length === 0)) {
    return (
      <div>
        <p>You don't add your books</p> <BookForm />
      </div>
    );
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="read">
      <BookForm />
      <div className="card-header">
        <h4>Title</h4>
        <h4>Date</h4>
        <h4>Rating</h4>
      </div>
      <AnimatePresence>
        {books.map((book) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <BooksItem key={book.id} book={book} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default BooksList;
