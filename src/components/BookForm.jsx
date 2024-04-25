import Button from "./shared/Button";
import { PiBooks } from "react-icons/pi";
import { useState, useContext, useEffect } from "react";
import MoviesContext from "../context/MoviesContext";
import RatingReview from "./RatingReview";

function BookForm() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [rating1, setRating1] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const {
    addBook,
    bookEdit,
    updateBooks,
    showToggle,
    setShowToggle,
    color,
    card,
  } = useContext(MoviesContext);

  useEffect(() => {
    if (bookEdit.edit === true) {
      console.log(bookEdit.edit);
      setDisabled(false);
      setText(bookEdit.item.text);
      setDate(bookEdit.item.date);
      setComment(bookEdit.item.comment);
      setShowToggle(!showToggle);
    }
    // eslint-disable-next-line
  }, [bookEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setDisabled(true);
      setMessage(null);
    } else {
      setDisabled(false);
    }
    setText(e.target.value);
  };

  const handleDateChange = (e) => {
    if (date === "") {
      setDisabled(true);
    } else {
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
    if (text !== "" && date !== "" && rating !== "") {
      const newBook = { text, date, rating, comment };

      if (bookEdit.edit === true) {
        updateBooks(bookEdit.item.id, newBook);
      } else {
        addBook(newBook);
      }
      setShowToggle(!showToggle);
      setText("");
      setDate("");
      setComment("");
    } else {
      setMessage("olmaz");
    }
  };

  return (
    <>
      <div className="my-5 d-flex justify-content-center">
        <button className="btn box" onClick={color}>
          <PiBooks style={{ color: "darkorchid" }} />
          Add Your Books
        </button>
      </div>
      {showToggle && (
        <form className={{ card }} onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="title of movie"
          ></input>
          <input
            value={date}
            onChange={handleDateChange}
            type="text"
            placeholder="date"
          ></input>
          <RatingReview
            rating1={rating1}
            setRating1={setRating1}
            select={(rating) => setRating(rating)}
          />
          <textarea
            value={comment}
            onChange={handleCommentChange}
            name="postContent"
            placeholder="add comment!!"
            rows={4}
            cols={40}
          />

          <div className="button-groups my-3">
            <Button type="submit" version="add" isDisabled={disabled}>
              Add book
            </Button>
          </div>

          {message && <div className="message">{message}</div>}
        </form>
      )}
    </>
  );
}

export default BookForm;
