import React from "react";

import "./Todo.css";
export default class Todo extends React.Component {
  render() {
    return (
      <div className="Todo">
        <div className="Todo-title">{this.props.title}</div>
        <div className="Todo-description">{this.props.description}</div>
        <div className="Todo-time">{this.props.time}</div>
        <div className="Todo-button">
          <button>Mark as complete</button>
          <button>Mark as open</button>
        </div>
      </div>
    );
  }
}
