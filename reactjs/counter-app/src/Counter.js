import React, { Component } from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
// import Clock from "./Clock";
import ClockFunctional from "./ClockFunctional";
import Step from "./Step";

//Komponent klasowy:
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      showClock: true,
      stepValue: 0,
    };

    //jesli metoda changeValue() napisana w ES5 to trzeba zbindowac:
    //this.changeValue = this.changeValue.bind(this);
  }

  //third method (the best). setState przyjmuje 2 parametry i przekazujemy funkcje a nie obiekt

  changeValue = (action) => {
    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === "add") {
        currentCounterValue += 1;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else if (action === "reset") {
        currentCounterValue = 0;
      } else if (action === "add-step") {
        currentCounterValue += this.state.stepValue;
      }
      return {
        counterValue: currentCounterValue,
      };
    });
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  // second method: (w naszym przypadku dziala ale by sie moglo pomieszac jak 2 przyciski klikniete szybko)
  //   changeValue = (action) => {
  //     let currentCounterValue = this.state.counterValue;

  //     if (action === "add") {
  //       currentCounterValue += 1;
  //     } else if (action === "reinit") {
  //       currentCounterValue = this.props.initValue;
  //     } else if (action === "reset") {
  //       currentCounterValue = 0;
  //     }

  //     this.setState({ //do metody setState przekazujemy obiekt a nie funkcje
  //       counterValue: currentCounterValue,
  //     });
  //   };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

  toggleClock = () => {
    this.setState((prevState) => {
      return {
        showClock: !prevState.showClock,
      };
    });
  };

  stepUpdate = (updatedValue) => {
    console.log(updatedValue);
    this.setState({
      stepValue: parseFloat(updatedValue),
    });
  };

  render() {
    let clockElement;
    if (this.state.showClock) {
      clockElement = (
        // <Clock toggleClockMethod={this.toggleClock} />
        <ClockFunctional toggleClockMethod={this.toggleClock} />
      );
    } else {
      clockElement = (
        <span onClick={this.toggleClock} className="show-clock">
          Show clock
        </span>
      );
    }

    return (
      <div className="counter">
        Counter:
        {/* <span className="value">{this.state.counterValue}</span> */}
        <Display displayValue={this.state.counterValue} />
        {/* <button onClick={this.changeValue}>Add 1</button> */}
        <ButtonsPanel
          buttonMethod={this.changeValue}
          stepValue={this.state.stepValue}
        />
        {clockElement}
        <Step
          stepUpdateMethod={this.stepUpdate}
          stepValue={this.state.stepValue}
        />
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
