import { useState } from "react";
import styles from "./Todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export function TodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onAddTodo({ todo });
      }}
    >
      <div className={styles["todo-input-container"]}>
        <input
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          type="text"
          name="todo-text"
          id="todo"
          placeholder="Type your Todo"
        />
        <button>Add</button>
      </div>
    </form>
  );
}
