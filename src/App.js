import React, { Component } from "react";
import TodoApp from "./component/TodoApp/TodoApp";

class App extends Component {
  state = {
    mystring: "Hello",
    name: "ashraf",
    city: "tirur",
  };

  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}
export default App;
