import React, { useEffect, useState } from "react";
import "../App.css";
import TodoItem from "./TodoItem.component";
import { mockApiCall } from "../mockApi/mockApiCall";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await mockApiCall();
      setTasks(data);
    }

    fetchData();
  }, []);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      }),
    );
  }

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchText.toLowerCase()),
  );

  useEffect(() => {
    // TODO: Call mockApiCall function from mockApiCall.js call this only once when page loads.
     async function fetchData() {
      const data = await mockApiCall();
      setTasks(data);
    }
    fetchData();
  }, []);


  
  return (
    <>
      <div className="todo-list">
          <input
          type="text"
          placeholder="Search todos..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />


        {/* {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}  -- all todos*/} 

        {/* <p>Searched toDos output</p> */}
        <ul>
          {filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </ul>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn-light" onClick={() => addTask(text)}>
          Add
        </button>
      </div>


      <div>
        <ul>
          {tasks.map((todo) => (
            <li key={todo.id}> {todo.text} </li>
          ))}
        </ul>
      </div>

    </>

  );
}
export default TodoList;