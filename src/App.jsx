//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Proptypes from "prop-types";

// include your styles into the webpack bundle
import "./index.css";

function App(props) {
  return (<div className="bigCounter">
    <div className="calendar"> </div>
    <i className="fa-regular fa-clock"></i>
    <div className="four">{props.digitFour % 10}</div>
    <div className="three">{props.digitThree % 10}</div>
    <div className="two">{props.digitTwo % 10}</div>
    <div className="one">{props.digitOne % 10}</div>
  </div>);
}
App.proptypes = {
  digitFour: Proptypes.number,
  digitThree: Proptypes.number,
  digitTwo: Proptypes.number,
  digitOne: Proptypes.number,
};

let counter = 0;
setInterval(function () {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  console.log(four, three, two, one);
  counter++;
}, 1000);

export default App