import {
  GET_TODOS,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS
} from "./todo.actions.js";
const initialState = {
  todo: [],
  errorMessage: "",
  isFetching: false
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        todo: action.todoData
      };
    case GET_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};

export default todoReducer;
