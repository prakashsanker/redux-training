import {
  CREATE_TODO,
  EDIT_TODO,
  GET_TODOS,
  DELETE_TODO
} from "./todo.actions.js";
import data from "./data.js";

const COMPLETED = "completed";
const OPEN = "open";

const todo = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return data;

    case CREATE_TODO:
      let existingState = state;

      const todoDetails = {};
      todoDetails.id = new Date().getTime();
      todoDetails.description = action.data.desc;
      todoDetails.title = action.data.title;
      todoDetails.time = Date.now();
      todoDetails.status = OPEN;
      const newTodos = existingState.map(todo => todo);

      return newTodos;

    default:
      return state;
  }
};
export default todo;

// state = null

// todo(state, action) --> returns something

// someOtherREducer(todo(state, action));

// before

/*
 state = {
   id: null,
   name: "default name"
 }


 pass it to a reducer, with action type DO_NOTHING


 // after?

 state = {
   id: null,
   name: "default name"
 }


*/

// after

//
