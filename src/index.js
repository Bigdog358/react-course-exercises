import React from "react";
import ReactDOM from "react-dom/client";

const fName = "Petr";
const lName = "Novák";
const luckyNumber = 3;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {luckyNumber}.</p>
  </div>
);
