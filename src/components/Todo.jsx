import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addTodo,
  deleteTodo,
  editTodo,
  updateTodo,
} from "../redux/actions/authAction";

const Todo = ({
  addTodo,
  todoData,
  todoCount,
  deleteTodo,
  editTodo,
  updateTodo,
}) => {
  const [todoText, setTodoText] = useState("");
  const [editText, setEditText] = useState("");

  const handelChange = (e) => {
    const data = e.target.value;
    setTodoText(data);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const final = { id: uuidv4(), text: todoText, isEdit: false };
    addTodo(final);
    setTodoText("");
  };
  const deleteTodoItem = (e) => {
    deleteTodo(e.target.dataset.id);
  };
  const editTodoItem = (e) => {
    editTodo(e.target.dataset.id);
  };
  const handelEditChange = (e) => {
    let value = e.target.value;
    setEditText(value);
  };
  const handelUpdate = (e) => {
    const dataid = e.target.dataset.id;
    updateTodo({ id: dataid, text: editText, isEdit: false });
  };
  return (
    <div>
      <Link to="/calculator">
        <button>Calculator</button>
      </Link>
      <Link to="/randomdata">
        <button>Random Data</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
      <br />
      <br />
      <br />
      <h4>Create TODO list</h4>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={handelChange} value={todoText} />
        <button type="submit">Add Todo</button>
      </form>
      No. of Todo List Item: {todoCount}
      {todoData.length === 0
        ? null
        : todoData.map((item, index) => (
            <p key={item.id}>
              {index + 1}.{" "}
              {item.isEdit ? (
                <input type="text" onChange={handelEditChange} />
              ) : (
                `${item.text} `
              )}
              <button onClick={deleteTodoItem} data-id={item.id}>
                Delete
              </button>
              {item.isEdit ? (
                <button data-id={item.id} onClick={handelUpdate}>
                  Update
                </button>
              ) : (
                <button onClick={editTodoItem} data-id={item.id}>
                  Edit
                </button>
              )}
            </p>
          ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoData: state.todoState.todoData,
  todoCount: state.todoState.count,
});

export default connect(mapStateToProps, {
  addTodo,
  deleteTodo,
  editTodo,
  updateTodo,
})(Todo);
