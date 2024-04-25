import { createContext, useState, useEffect } from "react";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieEdit, setMovieEdit] = useState({ item: {}, edit: false });
  const [showToggle, setShowToggle] = useState(false);
  const [card, setCard] = useState();

  useEffect(() => {
    fetchMovieData();
  }, []);
  // `http://localhost:5000/movieData?_sort=id&_order=desc`
  // Fetch feedback
  const fetchMovieData = async () => {
    const response = await fetch(`/movieData?_sort=id&_order=desc`);
    const data = await response.json();
    setMovies(data);
    setIsLoading(false);
  };
  const addMovie = async (newMovie) => {
    const response = await fetch("/movieData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    });
    const dataMovie = await response.json();
    setMovies([dataMovie, ...movies]);
  };
  const deleteMovies = async (id) => {
    await fetch(`/movieData/${id}`, { method: "DELETE" });
    setMovies(movies.filter((item) => item.id !== id));
  };

  const editMovie = (item) => {
    setMovieEdit({ item, edit: true });
  };

  const updateMovies = async (id, updItem) => {
    const response = await fetch(`/movieData/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updItem),
    });

    const updMovieData = await response.json();
    setMovies(
      movies.map((item) =>
        item.id === id ? { ...item, ...updMovieData } : item
      )
    );
  };

  const [books, setBooks] = useState([]);

  const [bookEdit, setBookEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    fetchBookData();
  }, []);

  const fetchBookData = async () => {
    const response = await fetch(`/bookData?_sort=id&_order=desc`);
    const data = await response.json();
    setBooks(data);
    setIsLoading(false);
  };

  const addBook = async (newBook) => {
    const response = await fetch("/bookData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });
    const dataBook = await response.json();
    setBooks([dataBook, ...books]);
  };

  const editBook = (item) => {
    setBookEdit({ item, edit: true });
  };

  const updateBooks = async (id, updBook) => {
    const response = await fetch(`/bookData/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updBook),
    });
    const data = await response.json();
    setBooks(
      books.map((book) => (book.id === id ? { ...book, ...data } : book))
    );
  };

  const deleteBook = async (id) => {
    await fetch(`/bookData/${id}`, { method: "DELETE" });
    setBooks(books.filter((item) => item.id !== id));
  };

  const color = () => {
    setCard("card");
    setShowToggle(!showToggle);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        deleteMovies,
        addMovie,
        editMovie,
        movieEdit,
        updateMovies,
        books,
        deleteBook,
        addBook,
        bookEdit,
        editBook,
        updateBooks,
        isLoading,
        card,
        showToggle,
        setShowToggle,
        color,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
export default MoviesContext;
