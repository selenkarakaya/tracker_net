import Card from "./shared/Card";
import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import Dropdown from "react-bootstrap/Dropdown";
import { RxDotsHorizontal } from "react-icons/rx";

function BooksItem({ book }) {
  const { deleteBook, editBook } = useContext(MoviesContext);
  return (
    <Card>
      <div className="d-flex justify-content-between">
        <div className="name">{book.text}</div>
        <div className="date">{book.date}</div>
        <div className="rate">{book.rating}</div>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            variant="success"
            className="dropdown"
          >
            <RxDotsHorizontal />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => deleteBook(book.id)}
            >
              {" "}
              <button className="btn btn-delete">
                <i className="fa-solid fa-eraser"></i>
              </button>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <button
                onClick={() => {
                  editBook(book);
                }}
                className="btn btn-edit"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-form2"
                aria-expanded="false"
                aria-controls="collapse-form2"
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <div className="action">
          <button
            className="btn btn-delete"
            onClick={() => deleteBook(book.id)}
          >
            <i className="fa-solid fa-eraser"></i>
          </button>

          <button
            onClick={() => editBook(book)}
            className="btn btn-edit"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-form2"
            aria-expanded="false"
            aria-controls="collapse-form2"
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </div> */}
      </div>
      <div className="comment">Your Thought:{book.comment}</div>
    </Card>
  );
}

export default BooksItem;
