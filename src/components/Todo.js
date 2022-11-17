/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ModalOverlay } from "../ui/ModalOverlay";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div className="todo" onClick={handleChange}>
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title}
        className="list"
      />

      <div>
        <img src={todo.imgUrl} alt="upload photo" width={100} />
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <p>check</p>
        </button>
        <button className="button-edit" onClick={() => handleEdit(todo)}>
          <p>edit</p>
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <p>delete</p>
        </button>

        <p>{todo?.startDate}</p>
        <p>{todo?.endDate}</p>
        {active && <ModalOverlay todo={todo} />}
      </div>
    </div>
  );
}
