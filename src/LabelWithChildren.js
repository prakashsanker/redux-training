import React from "react";
export default class LabelWithChildren extends React.Component {
  render() {
    return (
      <div>
        {this.props.label && <div>{this.props.label}</div>}
        {this.props.children}
      </div>
    );
  }
}
