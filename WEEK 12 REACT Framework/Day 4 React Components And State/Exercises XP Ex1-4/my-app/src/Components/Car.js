import React, { useState } from 'react';

const Car = ({ model }) => {
    // eslint-disable-next-line
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>This car is a {color} {model}</h1>
      <button onClick={() => setColor("blue")}>Change color</button>
    </div>
  );
};

export default Car;
