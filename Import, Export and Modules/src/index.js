import React from "react";
import ReactDOM from "react-dom/client";
import PI, { doublePi, triplePi } from "./math.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>
);
