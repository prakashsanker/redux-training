import { connect } from "react-redux";
import { createTodo } from "./todo.actions.js";
import CreateTodoComponent from "./CreateTodoComponent";
const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTodo: data => {
      console.log(data);
      dispatch(createTodo(data));
    }
  };
};

const CreateTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodoComponent);
export default CreateTodoContainer;
