// src/App.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./redux/actions";

const App = ({ todos, addTodo, removeTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo, removeTodo })(App);
