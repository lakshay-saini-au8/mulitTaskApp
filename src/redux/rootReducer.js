import { combineReducers } from "redux";
import { todo } from "./actionTypes";
import authreducer from "./reducers/authreducer";
import randomDataReducer from "./reducers/randomDataReducer";
import todoReducer from "./reducers/todoReducer";

const rootReudcer = combineReducers({
  authState: authreducer,
  todoState: todoReducer,
  randomState: randomDataReducer,
});

export default rootReudcer;
