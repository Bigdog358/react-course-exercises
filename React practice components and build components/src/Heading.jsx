// Obvykle se v komponentě řadí kód takto:
//  1. Importy
//  2. Název komponenty
//  3. constanty (proměnné)
//  4. Podmínky a logika
//  5. Vrácení (return)
//  6. Export

// 1.
import React from "react";

// 2.
function Heading() {
  // 3.
  const customStyle = {
    color: "",
  };

  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  // 4.
  if (currentTime < 12) {
    greeting = "Good Morning!";
    customStyle.color = "blue";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon!";
    customStyle.color = "green";
  } else {
    greeting = "Good Night!";
    customStyle.color = "orange";
  }

  // 5.
  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
}

// 6.
export default Heading;
