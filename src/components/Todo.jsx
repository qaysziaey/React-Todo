import React, { useState } from "react";
import styles from "./Todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckSquare,
  faPlus,
  faX,
  faPenToSquare,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export function Todo({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEditConfirm = () => {
    onEdit(editedTodo);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setEditedTodo(todo);
    setIsEditing(false);
  };

  return (
    <div className={styles["todo"]}>
      {isEditing ? (
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
        />
      ) : (
        <p>{todo}</p>
      )}

      <div className={styles["todo-item-buttons"]}>
        {isEditing ? (
          <>
            <button className={styles.button} onClick={handleEditConfirm}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className={styles.button} onClick={handleEditCancel}>
              <FontAwesomeIcon icon={faX} />
            </button>
          </>
        ) : (
          <>
            <button
              className={styles.button}
              onClick={() => setIsEditing(true)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className={styles.button} onClick={onDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
