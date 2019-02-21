export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export function getTodosFailure(errorMessage) {
  return {
    type: GET_TODOS_FAILURE,
    errorMessage
  };
}
export function getTodosSuccess(data) {
  return {
    type: GET_TODOS_SUCCESS,
    todoData: data
  };
}

export function getTodosRequest() {
  return {
    type: GET_TODOS_REQUEST
  };
}

export function getTodos() {
  return async dispatch => {
    try {
      dispatch(getTodosRequest());
      const result = await fetch("http://localhost:3000/todos");
      const resultJson = await result.json();
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      dispatch(getTodosSuccess(resultJson));
    } catch (e) {
      dispatch(getTodosFailure(e.message));
    }
  };
}
