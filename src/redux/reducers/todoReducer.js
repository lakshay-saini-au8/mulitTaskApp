import { todo } from "../actionTypes";

const initialState = {
  todoData: [],
  count: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case todo.ADD_TODO:
      return {
        ...state,
        todoData: [...state.todoData, payload],
        count: state.count + 1,
      };
    case todo.EDIT_TODO:
      const updatedArray = state.todoData.map((item) => {
        if (item.id === payload) {
          return { ...item, isEdit: true };
        } else {
          return item;
        }
      });
      return {
        ...state,
        todoData: updatedArray,
      };
    case todo.UPDATE_TODO:
      const updateTodo = state.todoData.map((item) => {
        if (item.id === payload.id) {
          return { ...item, text: payload.text, isEdit: payload.isEdit };
        } else {
          return item;
        }
      });
      return {
        ...state,
        todoData: updateTodo,
      };
    case todo.DELETE_TODO:
      const filteredData = state.todoData.filter((item) => item.id !== payload);
      return {
        ...state,
        todoData: filteredData,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
