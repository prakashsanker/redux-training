import React from "react";
import LabelWithChildren from "./LabelWithChildren.js";
export default class CreateTodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: ""
    };
  }
  onChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  onChangeDescription = event => {
    this.setState({ desc: event.target.value });
  };
  createTodoPassData = () => {
    this.props.createTodo(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <LabelWithChildren label="Title">
          <input
            type="text"
            placeholder="Enter Title"
            data="title"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
        </LabelWithChildren>
        <LabelWithChildren label="Description">
          <input
            type="text"
            placeholder="Enter Desc"
            data="desc"
            value={this.props.desc}
            onChange={this.onChangeDescription}
          />
        </LabelWithChildren>
        <button onClick={this.createTodoPassData}>Submit</button>
      </React.Fragment>
    );
  }
}
