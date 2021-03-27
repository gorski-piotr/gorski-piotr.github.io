import React, { Component } from "react";

export default class Step extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {};
  //   }

  //   stepUpdateMethod = () => {
  //     let stepUpdated = this._inputStep.value;
  //     // console.log("step updated: " + stepUpdated);
  //     this.props.stepUpdadeMethod(stepUpdated);
  //   };

  render() {
    return (
      <div>
        <span>Step: </span>
        <input
          ref={(data) => {
            this._inputStep = data;
          }}
          //   onChange={this.stepUpdateMethod}
          onChange={() => this.props.stepUpdateMethod(this._inputStep.value)}
          type="number"
          min="1"
          value={this.props.stepValue}
        />
      </div>
    );
  }
}
