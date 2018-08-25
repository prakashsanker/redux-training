import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoListContainer from "./TodoListContainer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
