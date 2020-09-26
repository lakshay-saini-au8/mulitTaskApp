import { applyMiddleware, createStore } from "redux";
import rootReudcer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  rootReudcer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
