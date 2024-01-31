import React, { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckSquare,
  faPlus,
  faX,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      todo: "Sport some random text",
    },
    {
      id: uuidv4(),
      todo: "Shopping some more random stuff",
    },
    {
      id: uuidv4(),
      todo: "Coding is a good habit to have.",
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddNewTodo = (newTask) => {
    setTasks([{ ...newTask, id: uuidv4() }, ...tasks]);
    setIsFormOpen(false);
  };

  const handleDeleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTodo = (id, editedTodo) => {
    const updatedTodos = tasks.map((task) =>
      task.id === id ? { ...task, todo: editedTodo } : task
    );
    setTasks(updatedTodos);
  };

  return (
    <div className="todo-main-container">
      <h1>Dayli</h1>
      <p>Organize Your Day, the Easy Way </p>
      <div className="all-content">
        <div className="add-new-todo-container">
          <button
            onClick={() => {
              setIsFormOpen((prevIsFormOpen) => !prevIsFormOpen);
            }}
          >
            {isFormOpen ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </button>
        </div>
        {isFormOpen && <TodoForm onAddTodo={handleAddNewTodo} />}

        <div className="task-items">
          {tasks.map((task) => (
            <Todo
              key={task.id}
              todo={task.todo}
              onDelete={() => handleDeleteTodo(task.id)}
              onEdit={(editedTodo) => handleEditTodo(task.id, editedTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
