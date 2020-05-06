import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChnage = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };

  deleteItem= key=>{
     const allItems= this.state.items;
     allItems.splice(key,1);
     this.setState({
        items:allItems
       
      });
  }

  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <h2>To Do App</h2>

        <form className="inputsection" onSubmit={this.storeItems}>
          <input
            type="text"
            onChange={this.handleChnage}
            value={input}
            placeholder="Enter Items.."
          />
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data} <i className="fas fa-trash"
               onClick={()=>this.deleteItem(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
