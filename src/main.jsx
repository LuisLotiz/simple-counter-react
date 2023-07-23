//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

// include your styles into the webpack bundle
import "./index.css";
import App from "./App";

function SimpleCounter(props) {
  return (<div className="bigCounter">
    <FontAwesomeIcon style={{ fontSize: '50px', color: 'white' }} icon={faClock} />
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

  counter++;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
    document.querySelector("#app")
  );
}, 1000);
//render your react application

