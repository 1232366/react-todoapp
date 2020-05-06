import React, { Component } from "react";

export default class counter extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Counter Component</h2>
        <h4>{this.state.counter}</h4>
        <button onClick={this.onIncrement}> + </button>
        <button onClick={this.onDecrement}> - </button>
      </div>
    );
  }
}
