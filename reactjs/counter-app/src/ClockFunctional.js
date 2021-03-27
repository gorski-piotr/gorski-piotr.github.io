import React, { useState, useEffect } from "react";
import "./ClockFunctional.css";

//function ClockFunctional() {
const ClockFunctional = (props) => {
  console.log("Initialization - setting state [date, setDate]");
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    let timerID = setInterval(() => {
      tick();
    }, 1000);
    console.log("mounting && updating lifecycle");

    return () => {
      clearInterval(timerID);
    };
  }, [date]);

  return (
    <p className="clock">
      {date.toLocaleTimeString()}
      <span onClick={props.toggleClockMethod}>X</span>
    </p>
  );
};

export default ClockFunctional;
