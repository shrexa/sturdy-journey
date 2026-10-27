
import React from "react";
import "../App.css";

function TodoItem({ task, deleteTask, toggleCompleted, onDateChange }) {
  const handleDateChange = (event) => {
    onDateChange(task.id, event.target.value);
  };

   function handleChange() {
    toggleCompleted(task.id);
  }


  return (
    <div className="todo-item">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
        <p>{task.text}</p>

      <p>
        {task.completed  && (
          <input
            type="date"
            value={task.completedAt || " "}
            // onChange={(e) => onDatechange(todo.id, e.target.value)}
            onChange={handleDateChange}
          />
        )}
      </p>

        <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}
export default TodoItem;