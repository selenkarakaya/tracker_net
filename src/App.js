import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import BooksList from "./components/BooksList";
import { MoviesProvider } from "./context/MoviesContext";

function App() {
  return (
    <MoviesProvider>
      <Header />
      <div className="container">
        <MoviesList />
        <BooksList />
      </div>
    </MoviesProvider>
  );
}

export default App;
