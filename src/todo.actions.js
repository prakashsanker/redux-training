export const GET_TODOS = "GET_TODOS";
export const CREATE_TODO = "CREATE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function getTodos() {
  return {
    type: GET_TODOS
  };
}

export function createTodo(todoDetails) {
  return {
    type: CREATE_TODO,
    data: todoDetails
  };
}

export function editTodo(id, valuesToChange) {
  return {
    type: EDIT_TODO,
    data: {
      id,
      ...valuesToChange
    }
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    data: {
      id
    }
  };
}
