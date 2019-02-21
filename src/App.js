import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoListContainer from "./TodoListContainer.js";

import CreateTodoContainer from "./CreateTodoContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer />
        <CreateTodoContainer />
      </div>
    );
  }
}

export default App;
