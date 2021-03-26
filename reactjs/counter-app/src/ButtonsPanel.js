import React from "react";
import "./ButtonsPanel.css";

function ButtonsPanel(props) {
  return (
    <div className="buttons-panel">
      <button
        onClick={() => {
          props.buttonMethod("add");
          //   console.log("add 1 clicked");
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          props.buttonMethod("reinit");
        }}
      >
        ReInit
      </button>
      <button
        onClick={() => {
          props.buttonMethod("reset");
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          props.buttonMethod("add-step");
        }}
      >
        Add step: {props.stepValue}
      </button>
    </div>
  );
}

export default ButtonsPanel;
