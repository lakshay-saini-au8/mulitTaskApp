import { randomData } from "../actionTypes";

const initialState = {
  randomUserData: null,
  isFetching: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case randomData.FETCH_DATA:
      return { ...state, isFetching: !state.isFetching };
    case randomData.SET_DATA:
      return { ...state, randomUserData: payload };
    case randomData.SEARCH_BY_NAME:
      const searchArray = [...state.randomUserData];
      const searchUpdate = searchArray.filter((item) => {
        if (item.name.match(payload)) {
          return true;
        } else {
          return false;
        }
      });
      return { ...state, randomUserData: searchUpdate };
    case randomData.SORT_BY_NAME:
      let updated = [...state.randomUserData];
      updated.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return { ...state, randomUserData: updated };
    case randomData.SORT_BY_EMAIL:
      let updatedEmail = [...state.randomUserData];
      updatedEmail.sort(function (a, b) {
        var nameA = a.email.toUpperCase();
        var nameB = b.email.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return { ...state, randomUserData: updatedEmail };
    case randomData.SORT_BY_USERNAME:
      let updatedUser = [...state.randomUserData];
      updatedUser.sort(function (a, b) {
        var nameA = a.username.toUpperCase();
        var nameB = b.username.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return { ...state, randomUserData: updatedUser };

    default:
      return state;
  }
};
