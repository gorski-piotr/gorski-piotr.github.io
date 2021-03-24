import React, { Component } from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";

//Komponent klasowy:
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
    };

    //jesli metoda changeValue() napisana w ES5 to trzeba zbindowac:
    //this.changeValue = this.changeValue.bind(this);
  }

  changeValue = (action) => {
    let currentCounterValue = this.state.counterValue;

    if (action === "add") {
      currentCounterValue += 1;
    } else if (action === "reinit") {
      currentCounterValue = this.props.initValue;
    } else if (action === "reset") {
      currentCounterValue = 0;
    }

    this.setState({
      counterValue: currentCounterValue,
    });
  };

  //   first method:
  //   changeValue = (action) => {
  //     if (action === "add") {
  //       this.setState((prevState) => {
  //         return {
  //           counterValue: prevState.counterValue + 1,
  //         };

  //         // mozna przekazac obiekt zamiast funkcji:
  //         // this.setState({
  //         //counterValue: this.state.counterValue + 1
  //         //});
  //       });
  //     } else if (action === "reinit") {
  //       this.setState(() => {
  //         return {
  //           counterValue: this.props.initValue,
  //         };
  //       });
  //     } else if (action === "reset") {
  //       this.setState(() => {
  //         return {
  //           counterValue: 0,
  //         };
  //       });
  //     }
  //   };

  render() {
    return (
      <div className="counter">
        Counter:
        {/* <span className="value">{this.state.counterValue}</span> */}
        <Display displayValue={this.state.counterValue} />
        {/* <button onClick={this.changeValue}>Add 1</button> */}
        <ButtonsPanel buttonMethod={this.changeValue} />
      </div>
    );
  }
}
export default Counter;

//Komponent funkcyjny:
// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * 108) + 1;

//     return (
//         <div className='counter'>
//             Counter:
//             <span className='value'>
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;
