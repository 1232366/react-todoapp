import React, { Component } from 'react'

export default class forms extends Component {
    state = {
        firstName:"",
        lastName:""
      };
    
    
    onHandleChange= event => {
        this.setState({
            [event.target.name]: event.target.value
          });
    };

    onSubmit=()=>{
        console.log(this.state);
    }

    render() {
        return (
            <form>
                <h3>Form Component</h3>
                <input type="text"
                name="firstName"
                onChange={this.onHandleChange}
                value={this.state.inputValue}
                />
                  <input type="text"
                   name="lastName"
                onChange={this.onHandleChange}
                value={this.state.inputValue}
                />
          <button type="button" onClick={this.onSubmit}>
                SUBMIT
          </button>
            </form>
        )
    }
}
