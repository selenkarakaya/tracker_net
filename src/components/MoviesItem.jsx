import Card from "./shared/Card";
import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import Dropdown from "react-bootstrap/Dropdown";
import { RxDotsHorizontal } from "react-icons/rx";

function MoviesItem({ item }) {
  const { deleteMovies, editMovie } = useContext(MoviesContext);
  return (
    <Card>
      <div className="d-flex justify-content-between">
        <div className="name">{item.text}</div>
        <div className="date">{item.date}</div>
        <div className="rate">{item.rating}</div>
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
              onClick={() => deleteMovies(item.id)}
            >
              <button className="btn btn-delete">
                <i className="fa-solid fa-eraser"></i>
              </button>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <button
                onClick={() => editMovie(item)}
                className="btn btn-edit"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-form"
                aria-expanded="false"
                aria-controls="collapse-form"
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <div className="button-group">
          <button
            onClick={() => deleteMovies(item.id)}
            className="btn btn-delete"
          >
            <i className="fa-solid fa-eraser"></i>
          </button>
          <button
            onClick={() => editMovie(item)}
            className="btn btn-edit"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-form"
            aria-expanded="false"
            aria-controls="collapse-form"
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </div> */}
      </div>

      <div className="comment">Your Thought:{item.comment}</div>
    </Card>
  );
}

export default MoviesItem;
