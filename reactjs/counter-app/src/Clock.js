import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
    console.log(`constructor(props)`);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
    console.log(`componentDidMount`);
  }
  componentDidUpdate() {
    console.log(`componentDidUpdate`);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(`componentWillUnmount`);
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    return (
      <p className="clock">
        {this.state.date.toLocaleTimeString()}
        <span onClick={this.props.toggleClockMethod}>X</span>
      </p>
    );
  }
}

export default Clock;
