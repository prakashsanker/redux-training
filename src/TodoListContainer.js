// containeri
import { connect } from "react-redux";
import { getTodos } from "./todo.actions.js";
import TodoList from "./TodoList.js";

const mapStateToProps = state => {
  console.log("IS MAP STATE TO PROPS ACTULALY CALLED");
  console.log(state);
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => {
      dispatch(getTodos());
    }
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
