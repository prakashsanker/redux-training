import {
  CREATE_TODO,
  EDIT_TODO,
  GET_TODOS,
  DELETE_TODO
} from "./todo.actions.js";
import data from "./data.js";

const todo = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return data;
    // case CREATE_TODO:
    //   action.data.todoDetails.id = data.length + 1;
    //   data.push(todoDetails);
    //   return data;
    // case EDIT_TODO:
    //   Object.keys(data).map(function(key, index) {
    //     if(inde)
    //   });
    //   return data;

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
