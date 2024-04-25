import MoviesItem from "./MoviesItem";
import MoviesForm from "./MoviesForm";
import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import Spinner from "./shared/Spinner";

function MoviesList() {
  const { movies, isLoading } = useContext(MoviesContext);
  if (!isLoading && (!movies || movies.length === 0)) {
    return <p>no movies</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="watch">
      <MoviesForm />
      <div className="card-header">
        <h4>Title</h4>
        <h4>Date</h4>
        <h4>Rating</h4>
      </div>
      {movies.map((item) => (
        <MoviesItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MoviesList;
