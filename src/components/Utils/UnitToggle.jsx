import React from "react";

const UnitToggle = ({ unit, setUnit }) => {
  return (
    <button className="unit-btn" onClick={() => { setUnit(unit === "celsius" ? "fahrenheit" : "celsius"); console.log(unit);}}>
      {unit === "celsius" ? "°C" : "°F"}
    </button>
  );
};

export default UnitToggle;