import React from "react";
import Todo from "./Todo.js";

export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.todos.map(todo => {
          return <Todo {...todo} />;
        })}
      </React.Fragment>
    );
  }
}
