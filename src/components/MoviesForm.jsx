import { useState, useContext, useEffect } from "react";
import { MdMovieFilter } from "react-icons/md";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import MoviesContext from "../context/MoviesContext";

function MoviesForm() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addMovie, movieEdit, updateMovies } = useContext(MoviesContext);

  useEffect(() => {
    if (movieEdit.edit === true) {
      setDisabled(false);
      setText(movieEdit.item.text);
      setDate(movieEdit.item.date);
      setRating(movieEdit.item.rating);
      setComment(movieEdit.item.comment);
      setShowToggle(!showToggle);
    }
    // eslint-disable-next-line
  }, [movieEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setDisabled(true);
      setMessage(null);
    } else {
      setMessage(null);
      setDisabled(false);
    }
    setText(e.target.value);
  };

  const handleDateChange = (e) => {
    if (date === "") {
      setDisabled(true);
      setMessage(null);
    } else {
      setMessage(null);
      setDisabled(false);
    }
    setDate(e.target.value);
  };
  const handleCommentChange = (e) => {
    if (comment === "") {
      setDisabled(true);
      setMessage(null);
    } else {
      setMessage(null);
      setDisabled(false);
    }
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      const newMovie = { text, date, rating, comment };

      if (movieEdit.edit === true) {
        updateMovies(movieEdit.item.id, newMovie);
      } else {
        addMovie(newMovie);
      }
      setShowToggle(!showToggle);
      setText("");
      setDate("");
      setComment("");
    }
  };
  const [showToggle, setShowToggle] = useState(false);

  const [card, setCard] = useState();
  const color = () => {
    setCard("card");
    setShowToggle(!showToggle);
    console.log("tik");
  };

  return (
    <>
      <div className="my-5 d-flex justify-content-center">
        <button className="btn box" onClick={color}>
          <MdMovieFilter style={{ color: "darkorchid" }} />
          Add Your Movies
        </button>
      </div>
      {showToggle && (
        <form className={{ card }} onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="Title of Movie"
          ></input>

          <input
            value={date}
            onChange={handleDateChange}
            type="text"
            placeholder="When did you watch?"
          ></input>
          <RatingSelect select={(rating) => setRating(rating)} />
          <textarea
            value={comment}
            onChange={handleCommentChange}
            name="postContent"
            placeholder="add comment!"
            rows={4}
            cols={40}
          />
          <div className="button-groups my-3">
            <Button type="submit" version="add" isDisabled={disabled}>
              Add movie
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      )}
    </>
  );
}

export default MoviesForm;
