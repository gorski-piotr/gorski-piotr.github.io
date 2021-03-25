import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
    console.log(`constructor(props)`);
  }

  componentDidMount() {
    console.log(`componentDidMount`);
  }
  componentDidUpdate() {
    console.log(`componentDidUpdate`);
  }
  componentWillUnmount() {
    console.log(`componentWillUnmount`);
  }

  render() {
    return (
      <p className="clock">
        {this.state.date.toLocaleTimeString()}
        <span>X</span>
      </p>
    );
  }
}

export default Clock;
