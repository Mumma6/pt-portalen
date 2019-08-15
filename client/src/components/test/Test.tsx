import React, { Component } from "react";

interface State {
  name: string;
}

export class Test extends Component<State> {
  state: State = {
    name: "Martin Persson"
  };
  render() {
    return (
      <div>
        <h1>bara test {this.state.name}</h1>
      </div>
    );
  }
}

export default Test;
