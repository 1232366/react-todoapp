import React, { Component } from "react";

export default class List extends Component {
  state = {
    score: 5,
    data: [
      {
        id: 1,
        name: "ashraf",
        age: 45,
      },
      {
        id: 2,
        name: "faheemah",
        age: 45,
      },
      {
        id: 3,
        name: "athif",
        age: 45,
      },
      {
        id: 4,
        name: "shamon",
        age: 46,
      },
    ],
  };
 
 

  incrementS = () => {
      this.setState(
          {
              score:10
          }
      );
  };

  render() {
      console.log(this.state.score);
    return (
      <div>
        <ul>
          {this.state.data.map((value, index) => (
            <li key={value.id}>
              {value.id} -{value.name} -{value.age}
            </li>
          ))}
        </ul>
        <button onClick={this.incrementS}> Score</button>
      </div>
    );
  }
}
