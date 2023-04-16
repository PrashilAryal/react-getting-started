import React, { Component } from "react";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    console.log("constructor");
  }

  componentDidMount() {
    //backend
    console.log("Component did mount");
  }

  static getDerivedStateFromProps(props) {
    console.log("getDerivedStateFromProps");
    return { counter: props.counter };
  }

  render() {
    console.log("render");
    return (
      <div style={{ marginBottom: 10 + "px" }}>
        <div>{this.props.title}</div>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          {this.props.counterTitle || "Default Counter"}: {this.state.counter}
        </button>
      </div>
    );
  }
}
export default Main;
