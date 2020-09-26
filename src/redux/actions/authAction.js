import { auth, todo, randomData } from "../actionTypes";
import axios from "axios";
export const login = (payload) => ({
  type: auth.LOGIN,
  payload,
});

export const logout = (payload) => ({
  type: auth.LOGOUT,
  payload,
});
export const register = (payload) => ({
  type: auth.REGISTER,
  payload,
});

export const addTodo = (payload) => ({
  type: todo.ADD_TODO,
  payload,
});
export const editTodo = (payload) => ({
  type: todo.EDIT_TODO,
  payload,
});
export const deleteTodo = (payload) => ({
  type: todo.DELETE_TODO,
  payload,
});
export const updateTodo = (payload) => ({
  type: todo.UPDATE_TODO,
  payload,
});
export const isFetchingData = () => ({
  type: randomData.FETCH_DATA,
});
export const setData = (payload) => ({
  type: randomData.SET_DATA,
  payload,
});

export const sortByName = () => ({
  type: randomData.SORT_BY_NAME,
});
export const sortByUserName = () => ({
  type: randomData.SORT_BY_USERNAME,
});
export const sortByEmail = () => ({
  type: randomData.SORT_BY_EMAIL,
});
export const serachByName = (payload) => ({
  type: randomData.SEARCH_BY_NAME,
  payload,
});

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(isFetchingData());
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    console.log(data);
    const finalData = data.map((item) => {
      return { name: item.name, username: item.username, email: item.email };
    });
    dispatch(setData(finalData));
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(isFetchingData());
  }
};
