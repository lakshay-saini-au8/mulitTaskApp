import { auth } from "../actionTypes";

const initialState = {
  userData: [],
  loggedUser: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case auth.REGISTER:
      const check = state.userData.filter(
        (item) => item.email === payload.email
      );
      if (check.length !== 0) {
        alert("User is alread reigstered");
        return { ...state };
      } else {
        return { ...state, userData: [...state.userData, payload] };
      }
    case auth.LOGIN:
      const checkLogin = state.userData.filter(
        (item) => item.email === payload.email
      );
      if (checkLogin.length === 1) {
        if (checkLogin[0].password !== payload.password) {
          alert("Wrong password");
          return { ...state };
        } else {
          return { ...state, loggedUser: checkLogin[0] };
        }
      } else {
        alert("User Not Found");
        return { ...state };
      }

    case auth.LOGOUT:
      return { ...state, loggedUser: null };
    default:
      return state;
  }
};
