import _ from "lodash";
import "./css/styles.css";
import "./sass/main.scss";
// import * as css from "./css/styles.css";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

console.log("stats :>> ");
